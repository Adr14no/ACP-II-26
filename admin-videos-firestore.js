import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, serverTimestamp, updateDoc, where } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { auth, db } from "./firebase-config.js";
import { isAdminUser } from "./admin-access.js";

/**
 * ROADMAP — VIDEOAULAS (IMPLEMENTAR EM ETAPA FUTURA; NÃO ATIVAR NESTA ENTREGA)
 * 1. Criar fluxo explícito de publicação/despublicação; salvar rascunho NÃO deve publicar.
 * 2. Criar catálogo/página do aluno que liste somente aulas publicadas e filtre por curso/matéria/categoria.
 * 3. Implementar reprodução segura e compatível com YouTube/Vimeo/links externos, com estados de erro e responsividade.
 * 4. Definir edição, revisão, publicação e arquivamento, além de validação dos campos e URLs.
 * 5. Revisar as regras REAIS do Firestore antes de ativar: apenas administradores ativos podem criar/editar/excluir;
 *    alunos só podem ler documentos publicados; impedir acesso público aos rascunhos e escrita por usuários comuns.
 * 6. Criar/verificar índice para a consulta status == "draft" + updatedAt desc, se o Firestore solicitar.
 * 7. Testar com conta administrativa, aluno comum e usuário deslogado antes de liberar.
 * IMPORTANTE: comentários documentam trabalho futuro; não substituem regras de segurança no servidor.
 */
const VIDEOS_COLLECTION = "videoAulas";
const MAX = { title: 250, url: 2000, description: 5000, course: 200, subject: 200, category: 200, duration: 80, instructor: 250, tag: 80 };

async function requireAdmin() {
  const user = auth.currentUser;
  if (!user) throw new Error("Faça login para continuar.");
  if (!(await isAdminUser(user))) throw new Error("Acesso restrito a administradores ativos.");
  return user;
}
function safeUrl(value) {
  try { const u = new URL(String(value ?? "").trim()); return ["http:", "https:"].includes(u.protocol) ? u.href : ""; }
  catch { return ""; }
}
function normalize(input, user) {
  if (!input || typeof input !== "object") throw new Error("Os dados da aula são inválidos.");
  const title = String(input.title ?? "").trim().slice(0, MAX.title);
  const url = safeUrl(input.url);
  const course = String(input.course ?? "").trim().slice(0, MAX.course);
  const subject = String(input.subject ?? "").trim().slice(0, MAX.subject);
  const category = String(input.category ?? "").trim().slice(0, MAX.category);
  if (!title) throw new Error("Informe o título da aula.");
  if (!url) throw new Error("Informe um endereço HTTP/HTTPS válido para o vídeo.");
  if (!course || !subject || !category) throw new Error("Curso, matéria e categoria são obrigatórios.");
  return {
    title, url,
    description: String(input.description ?? "").trim().slice(0, MAX.description),
    course, subject, category,
    duration: String(input.duration ?? "").trim().slice(0, MAX.duration),
    instructor: String(input.instructor ?? "").trim().slice(0, MAX.instructor),
    tags: Array.isArray(input.tags) ? [...new Set(input.tags.map(t => String(t).trim().slice(0, MAX.tag)).filter(Boolean))].slice(0, 50) : [],
    provider: detectProvider(url),
    status: "draft",
    updatedAt: serverTimestamp(),
    updatedBy: user.uid
  };
}
function detectProvider(url) {
  const u = new URL(url);
  if (u.hostname === "youtu.be" || /(^|\.)youtube(-nocookie)?\.com$/i.test(u.hostname)) return "youtube";
  if (/(^|\.)vimeo\.com$/i.test(u.hostname)) return "vimeo";
  return "external";
}
export async function saveVideoDraft(input) {
  const user = await requireAdmin();
  const payload = normalize(input, user);
  payload.createdAt = serverTimestamp();
  payload.createdBy = user.uid;
  const result = await addDoc(collection(db, VIDEOS_COLLECTION), payload);
  return result.id;
}
export async function updateVideoDraft(videoId, input) {
  const user = await requireAdmin();
  const ref = doc(db, VIDEOS_COLLECTION, String(videoId));
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error("Rascunho de aula não encontrado.");
  if (snap.data().status !== "draft") throw new Error("Somente rascunhos podem ser editados por este fluxo.");
  await updateDoc(ref, normalize(input, user));
  return videoId;
}
export async function listVideoDrafts() {
  await requireAdmin();
  const q = query(collection(db, VIDEOS_COLLECTION), where("status", "==", "draft"), orderBy("updatedAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}
export async function deleteVideoDraft(videoId) {
  await requireAdmin();
  const ref = doc(db, VIDEOS_COLLECTION, String(videoId));
  const snap = await getDoc(ref);
  if (!snap.exists()) throw new Error("Rascunho de aula não encontrado.");
  if (snap.data().status !== "draft") throw new Error("Somente rascunhos podem ser excluídos por este fluxo.");
  await deleteDoc(ref);
}
