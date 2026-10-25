// Progresso de estudos e histórico de questões por usuário.
 // Usa somente o Firebase do projeto e limita os dados ao UID autenticado.
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {
  collection, doc, getDoc, getDocs, runTransaction, serverTimestamp, setDoc
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
function cleanHistory(entries) {
  const cutoff = Date.now() - HISTORY_WINDOW_MS;
  const byKey = new Map();
  (Array.isArray(entries) ? entries : []).forEach(entry => {
    if (!entry || typeof entry.key !== "string" || !Number.isFinite(Number(entry.usedAt))) return;
    const usedAt = Number(entry.usedAt);
    if (usedAt < cutoff) return;
    const previous = byKey.get(entry.key);
    if (!previous || previous.usedAt < usedAt) byKey.set(entry.key, { key: entry.key, usedAt });
  });
  return [...byKey.values()];
}
function userDoc(id) {
  if (!activeUser?.uid) throw new Error("É necessário estar autenticado para salvar o progresso.");
  return doc(db, "users", activeUser.uid, LIBRARY_COLLECTION, id);
}
function stableKey(q) {
  return [q?.subject || "", q?.id !== undefined ? q.id : "", q?.text || ""].join("::").trim();
}

async function loadQuestionHistory(course) {
  if (!activeUser) return [];
  const ref = userDoc(historyDocId(course));
  const snap = await getDoc(ref);
  const entries = cleanHistory(snap.exists() ? snap.data().entries : []);
  return entries;
}

async function recordQuestionUsage(questions, course) {
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
      schemaVersion: 1
    }, { merge: true });
  });
  return true;
}

async function saveExamResult(result) {
  if (!activeUser || !result || result.shouldSave === false) return false;
  const id = `exam_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  await setDoc(userDoc(id), {
    recordType: "examResult",
    course: courseCode(result.course),
    mode: String(result.mode || "exam"),
    score: Number(result.score || 0),
    total: Number(result.total || 0),
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

async function getProgressSummary() {
  if (!activeUser) return { attempts: 0, totalQuestions: 0, totalCorrect: 0, averagePercent: 0, bestPercent: 0, recentResults: [] };
  const snap = await getDocs(collection(db, "users", activeUser.uid, LIBRARY_COLLECTION));
  const results = [];
  snap.forEach(item => {
    const data = item.data();
    if (data?.recordType === "examResult" && Number.isFinite(Number(data.percent))) {
      results.push({ ...data, id: item.id });
    }
  });
  results.sort((a, b) => Number(b.completedAtMs || 0) - Number(a.completedAtMs || 0));
  const totalQuestions = results.reduce((sum, item) => sum + Number(item.total || 0), 0);
  const totalCorrect = results.reduce((sum, item) => sum + Number(item.score || 0), 0);
  return {
    attempts: results.length,
    totalQuestions,
    totalCorrect,
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
  recordQuestionUsage,
  saveExamResult,
  getProgressSummary
};
