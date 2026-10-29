// Estatística coletiva do Banco de Questões ACP-II/26.
// O registro é feito por Cloud Function para que os totais não sejam graváveis pelo navegador.
import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-functions.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { app, auth, db } from "./firebase-config.js";

const functions = getFunctions(app);
const recordAnswerCallable = httpsCallable(functions, "recordStudyQuestionAnswer");

function stableQuestionId(question, course = "ACP") {
  const subject = String(question?.subject || "GERAL").trim().toUpperCase();
  const id = question?.idSimulado ?? question?.id;
  if (id === undefined || id === null || String(id).trim() === "") return "";
  const raw = `${String(course).toUpperCase()}_${subject}_${String(id).trim()}`;
  return raw.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Za-z0-9_-]/g, "_").slice(0, 180);
}

function normalizeStats(data) {
  const participants = Math.max(0, Number(data?.participants) || 0);
  const correct = Math.max(0, Number(data?.correct) || 0);
  const incorrect = Math.max(0, Number(data?.incorrect) || 0);
  const total = correct + incorrect;
  return {
    participants,
    correct,
    incorrect,
    correctPercent: total ? (correct / total) * 100 : 0,
    incorrectPercent: total ? (incorrect / total) * 100 : 0
  };
}

export async function getCollectiveQuestionStats(question, course = "ACP") {
  if (!auth.currentUser) return null;
  const questionId = stableQuestionId(question, course);
  if (!questionId) return null;
  const snap = await getDoc(doc(db, "questionStats", questionId));
  return snap.exists() ? normalizeStats(snap.data()) : normalizeStats(null);
}

export async function recordCollectiveStudyAnswer(question, isCorrect, course = "ACP") {
  if (!auth.currentUser) throw new Error("É necessário estar autenticado.");
  const questionId = stableQuestionId(question, course);
  if (!questionId) throw new Error("Esta questão não possui identificador estável para a estatística coletiva.");
  const response = await recordAnswerCallable({ questionId, isCorrect: Boolean(isCorrect) });
  return normalizeStats(response.data);
}
