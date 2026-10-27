
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
  orderBy
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import { auth, db } from "./firebase-config.js";
import { isAdminUser } from "./admin-access.js";

const NORMS_COLLECTION = "normas";

const ALLOWED_TAGS = new Set([
  "P", "BR", "STRONG", "B", "EM", "I", "U",
  "H1", "H2", "H3", "H4",
  "UL", "OL", "LI", "BLOCKQUOTE",
  "TABLE", "THEAD", "TBODY", "TR", "TH", "TD",
  "DIV", "SPAN", "HR", "SUP", "SUB"
]);

const ALLOWED_CLASSES = new Set([
  "hierarchy-title",
  "hierarchy-subtitle",
  "section-heading",
  "legal-article",
  "article-auto",
  "user-highlight"
]);

/**
 * Remove elementos e atributos perigosos do HTML.
 * Mantém apenas uma lista restrita de tags e classes.
 */
export function sanitizeNormativeHtml(input) {
  const parsed = new DOMParser().parseFromString(
    String(input ?? ""),
    "text/html"
  );

  parsed.querySelectorAll(
    "script, style, iframe, object, embed, form, input, button, " +
    "textarea, select, link, meta, base, svg, math, template"
  ).forEach((node) => node.remove());

  for (const element of [...parsed.body.querySelectorAll("*")]) {
    if (!ALLOWED_TAGS.has(element.tagName)) {
      element.replaceWith(...element.childNodes);
      continue;
    }

    for (const attribute of [...element.attributes]) {
      if (attribute.name.toLowerCase() !== "class") {
        element.removeAttribute(attribute.name);
        continue;
      }

      const safeClasses = attribute.value
        .split(/\s+/)
        .filter((className) => ALLOWED_CLASSES.has(className));

      if (safeClasses.length) {
        element.setAttribute("class", safeClasses.join(" "));
      } else {
        element.removeAttribute("class");
      }
    }
  }

  return parsed.body.innerHTML;
}

function requireAuthenticatedUser() {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("Faça login para continuar.");
  }

  return user;
}

async function requireAdmin() {
  const user = requireAuthenticatedUser();
  const allowed = await isAdminUser(user);

  if (!allowed) {
    throw new Error("Acesso restrito a administradores ativos.");
  }

  return user;
}

function safeHttpUrl(value) {
  const url = String(value ?? "").trim();

  if (!url) return "";

  try {
    const parsed = new URL(url);

    return parsed.protocol === "https:" || parsed.protocol === "http:"
      ? parsed.href
      : "";
  } catch {
    return "";
  }
}

function normalizeNorma(input, user) {
  if (!input || typeof input !== "object") {
    throw new Error("Os dados da norma são inválidos.");
  }

  const title = String(input.title ?? "").trim();
  const code = String(input.code ?? "").trim();
  const contentHtml = sanitizeNormativeHtml(input.contentHtml);

  if (!title) {
    throw new Error("Informe o título da norma.");
  }

  if (!code) {
    throw new Error("Informe o código da norma.");
  }

  if (!contentHtml.trim()) {
    throw new Error("O conteúdo da norma está vazio.");
  }

  const materials = Array.isArray(input.materials)
    ? input.materials.slice(0, 100).map((item) => ({
        title: String(item?.title ?? "").trim().slice(0, 250),
        type: String(item?.type ?? "").trim().slice(0, 80),
        url: safeHttpUrl(item?.url),
        description: String(item?.description ?? "")
          .trim()
          .slice(0, 2000)
      }))
    : [];

  return {
    title: title.slice(0, 500),
    code: code.slice(0, 150),
    edition: String(input.edition ?? "").trim().slice(0, 150),
    description: String(input.description ?? "").trim().slice(0, 3000),
    course: String(input.course ?? "").trim().slice(0, 200),
    subject: String(input.subject ?? "").trim().slice(0, 200),
    category: String(input.category ?? "").trim().slice(0, 200),
    order: Number.isFinite(Number(input.order))
      ? Number(input.order)
      : 0,
    tags: Array.isArray(input.tags)
      ? input.tags
          .map((tag) => String(tag).trim().slice(0, 80))
          .filter(Boolean)
          .slice(0, 50)
      : [],
    watermark: String(input.watermark ?? "").trim().slice(0, 250),
    showSearch: input.showSearch !== false,
    contentHtml,
    materials,
    status: "draft",
    updatedAt: serverTimestamp(),
    updatedBy: user.uid
  };
}

/**
 * Cria um rascunho no Firestore.
 * Não publica a norma.
 * Retorna o ID do documento criado.
 */
export async function saveNormaDraft(input) {
  const user = await requireAdmin();
  const payload = normalizeNorma(input, user);

  payload.createdAt = serverTimestamp();
  payload.createdBy = user.uid;

  const ref = await addDoc(
    collection(db, NORMS_COLLECTION),
    payload
  );

  return ref.id;
}

/**
 * Atualiza um rascunho existente.
 * Não permite atualização de documentos publicados
 * por meio desta função.
 */
export async function updateNormaDraft(normaId, input) {
  const user = await requireAdmin();

  const ref = doc(
    db,
    NORMS_COLLECTION,
    String(normaId)
  );

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    throw new Error("Norma não encontrada.");
  }

  if (snapshot.data().status === "published") {
    throw new Error(
      "Esta norma já está publicada. " +
      "Use o fluxo específico de revisão/publicação."
    );
  }

  await updateDoc(ref, normalizeNorma(input, user));

  return normaId;
}

/**
 * Lista os rascunhos mais recentemente atualizados.
 */
export async function listNormaDrafts() {
  await requireAdmin();

  const draftsQuery = query(
    collection(db, NORMS_COLLECTION),
    where("status", "==", "draft"),
    orderBy("updatedAt", "desc")
  );

  const snapshot = await getDocs(draftsQuery);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data()
  }));
}

/**
 * Obtém um rascunho pelo ID.
 */
export async function getNormaDraft(normaId) {
  await requireAdmin();

  const snapshot = await getDoc(
    doc(db, NORMS_COLLECTION, String(normaId))
  );

  if (!snapshot.exists()) {
    return null;
  }

  const data = snapshot.data();

  if (data.status !== "draft") {
    throw new Error(
      "O documento solicitado não é um rascunho."
    );
  }

  return {
    id: snapshot.id,
    ...data
  };
}

/**
 * Observa a autenticação e informa se o usuário
 * possui acesso administrativo ativo.
 */
export function watchAdminAccess(callback) {
  return onAuthStateChanged(auth, async (user) => {
    if (!user) {
      callback({
        user: null,
        isAdmin: false
      });
      return;
    }

    try {
      callback({
        user,
        isAdmin: await isAdminUser(user)
      });
    } catch (error) {
      console.error(
        "Falha ao verificar o acesso administrativo:",
        error
      );

      callback({
        user,
        isAdmin: false,
        error
      });
    }
  });
}
