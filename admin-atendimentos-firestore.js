import { addDoc, collection, doc, getDocs, limit, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { auth, db } from "./firebase-config.js";
import { isAdminUser } from "./admin-access.js";
async function requireAdmin(){const user=auth.currentUser;if(!user||!(await isAdminUser(user)))throw new Error("Acesso restrito a administradores ativos.");return user;}
export async function listAdminTickets(callback,onError){
 await requireAdmin();
 const q=query(collection(db,"atendimentos"),orderBy("updatedAt","desc"),limit(150));
 return onSnapshot(q,snap=>callback(snap.docs.map(d=>({id:d.id,...d.data()}))),onError);
}
export function watchAdminTicketMessages(ticketId,callback,onError){
 const q=query(collection(db,"atendimentos",ticketId,"messages"),orderBy("createdAt","asc"),limit(200));
 return onSnapshot(q,snap=>callback(snap.docs.map(d=>({id:d.id,...d.data()}))),onError);
}
export async function sendAdminTicketReply(ticketId,text){
 const user=await requireAdmin();const value=String(text||"").trim();if(!value)throw new Error("Digite a resposta.");
 const {writeBatch}=await import("https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js");
 const batch=writeBatch(db);const parent=doc(db,"atendimentos",ticketId);
 const msg=doc(collection(db,"atendimentos",ticketId,"messages"));
 batch.set(msg,{text:value,senderUid:user.uid,senderName:user.displayName||user.email||"Administração",senderRole:"admin",createdAt:serverTimestamp()});
 batch.update(parent,{status:"replied",updatedAt:serverTimestamp()});await batch.commit();
}
export async function setAdminTicketStatus(ticketId,status){
 await requireAdmin();if(!["progress","closed","new"].includes(status))throw new Error("Status inválido.");
 await updateDoc(doc(db,"atendimentos",ticketId),{status,updatedAt:serverTimestamp()});
}
