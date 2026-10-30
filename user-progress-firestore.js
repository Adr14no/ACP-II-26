// Progresso de estudos e histórico de questões por usuário.
 // Usa somente o Firebase do projeto e limita os dados ao UID autenticado.
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {
  collection, doc, getDocs, runTransaction, serverTimestamp, setDoc, Timestamp
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { auth, db } from "./firebase-config.js";

const HISTORY_WINDOW_MS = 72 * 60 * 60 * 1000;
const LIBRARY_COLLECTION = "libraryData";
let activeUser = null;
let authReadyResolve;
const authReady = new Promise(resolve => { authReadyResolve = resolve; });
let authResolved = false;

function courseCode(course) {
  return String(course || "ACP").toUpperCase() === "CAO" ? "CAO" : "ACP";
}
function historyDocId(course) { return `questionHistory_${courseCode(course)}`; }
function compactHistoryKey(key) {
  if (typeof key !== "string") return "";
  // Compatibilidade com chaves antigas "matéria::id::enunciado": descarta o enunciado.
  const parts = key.split("::");
  if (parts.length >= 2 && parts[0] && parts[1]) return parts[0] + "::" + parts[1];
  return key;
}
function cleanHistory(entries) {
  const cutoff = Date.now() - HISTORY_WINDOW_MS;
  const byKey = new Map();
  (Array.isArray(entries) ? entries : []).forEach(entry => {
    if (!entry || typeof entry.key !== "string" || !Number.isFinite(Number(entry.usedAt))) return;
    const usedAt = Number(entry.usedAt);
    if (usedAt < cutoff) return;
    const key = compactHistoryKey(entry.key);
    if (!key) return;
    const previous = byKey.get(key);
    if (!previous || previous.usedAt < usedAt) byKey.set(key, { key, usedAt });
  });
  return [...byKey.values()];
}
function userDoc(id) {
  if (!activeUser?.uid) throw new Error("É necessário estar autenticado para salvar o progresso.");
  return doc(db, "users", activeUser.uid, LIBRARY_COLLECTION, id);
}
function stableKey(q) {
  const id = q?.id !== undefined && q.id !== null && String(q.id).trim() ? q.id : q?.idSimulado;
  if (id === undefined || id === null || !String(id).trim()) return "";
  return String(q?.subject || "GERAL").trim() + "::" + String(id).trim();
}

export async function loadQuestionHistory(course) {
  if (!activeUser) return [];
  const ref = userDoc(historyDocId(course));
  let entries = [];

  // A transação lê e limpa o documento no servidor, evitando sobrescrever
  // alterações concorrentes feitas por outra sessão do mesmo usuário.
  await runTransaction(db, async tx => {
    const snap = await tx.get(ref);
    if (!snap.exists()) {
      entries = [];
      return;
    }

    const rawEntries = snap.data().entries;
    const cleanedEntries = cleanHistory(rawEntries);
    entries = cleanedEntries;

    // Se a limpeza/compactação não mudou nada, não gera uma gravação desnecessária.
    if (JSON.stringify(Array.isArray(rawEntries) ? rawEntries : []) === JSON.stringify(cleanedEntries)) {
      return;
    }

    // O documento é exclusivo do histórico de questões. Se tudo venceu ou era inválido,
    // removê-lo por inteiro economiza mais dados; resultados de simulados ficam intactos.
    if (cleanedEntries.length === 0) {
      tx.delete(ref);
      return;
    }

    const now = Date.now();
    tx.set(ref, {
      course: courseCode(course),
      entries: cleanedEntries,
      updatedAt: serverTimestamp(),
      expiresAt: Timestamp.fromMillis(now + HISTORY_WINDOW_MS),
      schemaVersion: 2
    }, { merge: true });
  });

  return entries;
}

async function mergeQuestionHistory(entries, course) {
  if (!activeUser) return [];
  const ref = userDoc(historyDocId(course));
  let merged = [];
  await runTransaction(db, async tx => {
    const snap = await tx.get(ref);
    const current = cleanHistory(snap.exists() ? snap.data().entries : []);
    merged = cleanHistory([...current, ...(Array.isArray(entries) ? entries : [])]);
    tx.set(ref, {
      course: courseCode(course),
      entries: merged,
      updatedAt: serverTimestamp(),
      expiresAt: Timestamp.fromMillis(Date.now() + HISTORY_WINDOW_MS),
      schemaVersion: 2
    }, { merge: true });
  });
  return merged;
}

export async function recordQuestionUsage(questions, course) {
  if (!activeUser || !Array.isArray(questions) || questions.length === 0) return false;
  const ref = userDoc(historyDocId(course));
  const now = Date.now();
  const keys = [...new Set(questions.map(stableKey).filter(Boolean))];
  await runTransaction(db, async tx => {
    const snap = await tx.get(ref);
    const current = cleanHistory(snap.exists() ? snap.data().entries : []);
    const merged = cleanHistory([...current, ...keys.map(key => ({ key, usedAt: now }))]);
    tx.set(ref, {
      course: courseCode(course),
      entries: merged,
      updatedAt: serverTimestamp(),
      expiresAt: Timestamp.fromMillis(now + HISTORY_WINDOW_MS),
      schemaVersion: 2
    }, { merge: true });
  });
  return true;
}

export async function saveExamResult(result) {
  if (!activeUser || !result || result.shouldSave === false) return false;
  const id = `exam_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  await setDoc(userDoc(id), {
    recordType: "examResult",
    course: courseCode(result.course),
    mode: String(result.mode || "exam"),
    score: Number(result.score || 0),
    total: Number(result.total || 0),
    answered: Number.isFinite(Number(result.answered)) ? Number(result.answered) : Number(result.total || 0),
    incorrect: Number.isFinite(Number(result.incorrect)) ? Number(result.incorrect) : Math.max(0, Number(result.total || 0) - Number(result.score || 0)),
    unanswered: Number.isFinite(Number(result.unanswered)) ? Number(result.unanswered) : 0,
    percent: Number(result.percent || 0),
    grade: Number(result.grade || 0),
    elapsedSeconds: Number(result.elapsedSeconds || 0),
    subjects: result.subjects && typeof result.subjects === "object" ? result.subjects : {},
    completedAt: serverTimestamp(),
    completedAtMs: Date.now(),
    schemaVersion: 1
  });
  return true;
}

export async function getProgressSummary(course = "ACP") {
  const selectedCourse = courseCode(course);
  if (!activeUser) return { attempts: 0, totalQuestions: 0, totalCorrect: 0, totalIncorrect: 0, totalUnanswered: 0, averagePercent: 0, bestPercent: 0, studiedSubjects: [], recentResults: [] };
  const snap = await getDocs(collection(db, "users", activeUser.uid, LIBRARY_COLLECTION));
  const results = [];
  const studiedSubjects = new Set();
  snap.forEach(item => {
    const data = item.data();
    if (data?.recordType === "examResult"
      && Number.isFinite(Number(data.percent))
      // Registros antigos sem curso permanecem no ACP por compatibilidade.
      && courseCode(data.course || "ACP") === selectedCourse) {
      results.push({ ...data, id: item.id });
      if (data.subjects && typeof data.subjects === "object") {
        Object.entries(data.subjects).forEach(([subject, values]) => {
          if (values && (Number(values.total || 0) > 0 || Number(values.correct || 0) > 0)) studiedSubjects.add(subject);
        });
      }
    }
  });
  results.sort((a, b) => Number(b.completedAtMs || 0) - Number(a.completedAtMs || 0));
  // Registros antigos não guardavam quantas questões foram respondidas; não inferir erros a partir deles.
  const totalQuestions = results.reduce((sum, item) => sum + (Number.isFinite(Number(item.answered)) ? Number(item.answered) : 0), 0);
  const totalCorrect = results.reduce((sum, item) => sum + Number(item.score || 0), 0);
  const totalIncorrect = results.reduce((sum, item) => sum + (Number.isFinite(Number(item.incorrect)) ? Number(item.incorrect) : 0), 0);
  const totalUnanswered = results.reduce((sum, item) => sum + (Number.isFinite(Number(item.unanswered)) ? Number(item.unanswered) : 0), 0);
  return {
    attempts: results.length,
    totalQuestions,
    totalCorrect,
    totalIncorrect,
    totalUnanswered,
    studiedSubjects: [...studiedSubjects],
    averagePercent: results.length ? results.reduce((sum, item) => sum + Number(item.percent || 0), 0) / results.length : 0,
    bestPercent: results.length ? Math.max(...results.map(item => Number(item.percent || 0))) : 0,
    recentResults: results.slice(0, 10)
  };
}

onAuthStateChanged(auth, user => {
  activeUser = user || null;
  if (!authResolved) {
    authResolved = true;
    authReadyResolve(activeUser);
  }
});

window.studyProgress = {
  ready: () => authReady,
  loadQuestionHistory,
  mergeQuestionHistory,
  recordQuestionUsage,
  saveExamResult,
  getProgressSummary
};
