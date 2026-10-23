
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { db } from "./firebase-config.js";

/**
 * Verifica se o usuário autenticado possui cadastro
 * administrativo ativo no Firestore.
 *
 * A autorização efetiva das operações também depende
 * das regras de segurança do Firestore.
 */
export async function isAdminUser(user) {
  if (!user || !user.uid) {
    return false;
  }

  try {
    const adminRef = doc(db, "admins", user.uid);
    const adminSnapshot = await getDoc(adminRef);

    return adminSnapshot.exists()
      && adminSnapshot.data().active === true;
  } catch (error) {
    console.error("Não foi possível verificar o perfil administrativo:", error);
    return false;
  }
}
