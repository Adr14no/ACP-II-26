
 // Configuração compartilhada do Firebase.
 // Não incluir chaves privadas ou credenciais administrativas.

import { getApp, getApps, initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyANcW27P7NHL_qJtjTg8n683P0I7sm5Z6Y",
  authDomain: "plataforma-aperfeicoamento.firebaseapp.com",
  projectId: "plataforma-aperfeicoamento",
  storageBucket: "plataforma-aperfeicoamento.firebasestorage.app",
  messagingSenderId: "750933864503",
  appId: "1:750933864503:web:9bfdfbbb5a7b87de8e0fb2"
};

export const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export { firebaseConfig };
