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
function assertFirestorePermission(error) {
  if (error?.code === "permission-denied") {
    throw new Error("O Firestore negou a operação. Publique as regras atualizadas de firestore.rules no projeto Firebase e confirme que sua conta está em admins com active=true.");
  }
  throw error;
}
function normalize(input) {
  const title = String(input?.title ?? "").trim().slice(0, 180);
  const body = String(input?.body ?? "").trim().slice(0, 8000);
  if (!title || !body) throw new Error("Informe o título e a mensagem.");
  return { title, body, active: input.active === true };
}
export async function listAdminNotifications() {
  await requireAdmin();
  let snap; try { snap = await getDocs(query(collection(db, NOTIFICATIONS), orderBy("updatedAt", "desc"))); } catch (error) { assertFirestorePermission(error); }
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}
export async function createAdminNotification(input) {
  const user = await requireAdmin();
  const payload = normalize(input);
  const now = serverTimestamp();
  let ref; try { ref = await addDoc(collection(db, NOTIFICATIONS), { ...payload, createdAt: now, updatedAt: now, createdBy: user.uid, updatedBy: user.uid }); } catch (error) { assertFirestorePermission(error); }
  return ref.id;
}
export async function updateAdminNotification(id, input) {
  const user = await requireAdmin();
  const payload = normalize(input);
  try { await updateDoc(doc(db, NOTIFICATIONS, String(id)), { ...payload, updatedAt: serverTimestamp(), updatedBy: user.uid }); } catch (error) { assertFirestorePermission(error); }
}
export async function deleteAdminNotification(id) {
  await requireAdmin();
  try { await deleteDoc(doc(db, NOTIFICATIONS, String(id))); } catch (error) { assertFirestorePermission(error); }
}
