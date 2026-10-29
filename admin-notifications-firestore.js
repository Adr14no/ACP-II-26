import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, serverTimestamp, updateDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { auth, db } from "./firebase-config.js";
import { isAdminUser } from "./admin-access.js";

const NOTIFICATIONS = "notifications";
async function requireAdmin() {
  const user = auth.currentUser;
  if (!user) throw new Error("Faça login para continuar.");
  if (!(await isAdminUser(user))) throw new Error("Acesso restrito a administradores ativos.");
  return user;
}
function normalize(input) {
  const title = String(input?.title ?? "").trim().slice(0, 180);
  const body = String(input?.body ?? "").trim().slice(0, 8000);
  if (!title || !body) throw new Error("Informe o título e a mensagem.");
  return { title, body, active: input.active === true };
}
export async function listAdminNotifications() {
  await requireAdmin();
  const snap = await getDocs(query(collection(db, NOTIFICATIONS), orderBy("updatedAt", "desc")));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}
export async function createAdminNotification(input) {
  const user = await requireAdmin();
  const payload = normalize(input);
  const now = serverTimestamp();
  const ref = await addDoc(collection(db, NOTIFICATIONS), { ...payload, createdAt: now, updatedAt: now, createdBy: user.uid, updatedBy: user.uid });
  return ref.id;
}
export async function updateAdminNotification(id, input) {
  const user = await requireAdmin();
  const payload = normalize(input);
  await updateDoc(doc(db, NOTIFICATIONS, String(id)), { ...payload, updatedAt: serverTimestamp(), updatedBy: user.uid });
}
export async function deleteAdminNotification(id) {
  await requireAdmin();
  await deleteDoc(doc(db, NOTIFICATIONS, String(id)));
}
