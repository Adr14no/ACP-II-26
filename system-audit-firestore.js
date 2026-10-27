import {
  addDoc, collection, getDocs, limit, orderBy, query, serverTimestamp,
  Timestamp
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { auth, db } from "./firebase-config.js";

const LOGS = "systemLogs";
const brTime = value => {
  if (!value) return "—";
  const date = value.toDate ? value.toDate() : new Date(value);
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo", dateStyle: "short", timeStyle: "medium"
  }).format(date);
};

export async function recordAuditEvent(eventType, extra = {}) {
  const user = auth.currentUser;
  if (!user?.uid) return null;
  const event = {
    uid: user.uid,
    email: user.email || "",
    displayName: user.displayName || "",
    type: eventType,
    createdAt: serverTimestamp(),
    clientTime: Timestamp.now(),
    userAgent: navigator.userAgent.slice(0, 300),
    ...extra
  };
  try {
    const ref = await addDoc(collection(db, LOGS), event);
    return ref.id;
  } catch (error) {
    console.error("Não foi possível registrar evento de auditoria:", error);
    return null;
  }
}

export async function listAuditEvents({ email = "", type = "", max = 250 } = {}) {
  const user = auth.currentUser;
  if (!user?.uid) throw new Error("Autenticação necessária.");
  // A autorização final é aplicada pelas regras do Firestore.
  const snapshot = await getDocs(query(collection(db, LOGS), orderBy("clientTime", "desc"), limit(max)));
  const normalizedEmail = email.trim().toLowerCase();
  return snapshot.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() }))
    .filter(row => (!normalizedEmail || String(row.email || "").toLowerCase().includes(normalizedEmail))
      && (!type || row.type === type))
    .map(row => ({ ...row, formattedTime: brTime(row.clientTime || row.createdAt) }));
}
