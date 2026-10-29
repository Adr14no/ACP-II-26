const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

initializeApp();
const db = getFirestore();

function validateQuestionId(value) {
  if (typeof value !== "string" || !/^[A-Za-z0-9_-]{1,180}$/.test(value)) {
    throw new HttpsError("invalid-argument", "Identificador de questão inválido.");
  }
  return value;
}

exports.recordStudyQuestionAnswer = onCall(async (request) => {
  if (!request.auth) throw new HttpsError("unauthenticated", "Entre na plataforma para registrar sua resposta.");
  const questionId = validateQuestionId(request.data?.questionId);
  const isCorrect = request.data?.isCorrect;
  if (typeof isCorrect !== "boolean") throw new HttpsError("invalid-argument", "Resultado inválido.");

  const uid = request.auth.uid;
  const statsRef = db.collection("questionStats").doc(questionId);
  const responseRef = statsRef.collection("responses").doc(uid);
  let result;

  await db.runTransaction(async (tx) => {
    const responseSnap = await tx.get(responseRef);
    const statsSnap = await tx.get(statsRef);
    const stats = statsSnap.exists ? statsSnap.data() : {};
    let participants = Number.isInteger(stats.participants) ? stats.participants : 0;
    let correct = Number.isInteger(stats.correct) ? stats.correct : 0;
    let incorrect = Number.isInteger(stats.incorrect) ? stats.incorrect : 0;

    // Uma única participação por UID e questão. Respostas posteriores não alteram o primeiro registro.
    if (!responseSnap.exists) {
      tx.create(responseRef, {
        uid,
        isCorrect,
        createdAt: FieldValue.serverTimestamp(),
        schemaVersion: 1
      });
      participants += 1;
      if (isCorrect) correct += 1;
      else incorrect += 1;
      tx.set(statsRef, {
        participants,
        correct,
        incorrect,
        updatedAt: FieldValue.serverTimestamp(),
        schemaVersion: 1
      }, { merge: true });
    }
    result = { participants, correct, incorrect };
  });

  return result;
});
