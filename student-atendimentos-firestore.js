import { addDoc, collection, doc, getDocs, limit, onSnapshot, orderBy, query, serverTimestamp, updateDoc, where } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { auth, db } from "./firebase-config.js";

function requireUser(){const user=auth.currentUser;if(!user)throw new Error("Entre na plataforma para utilizar a Central de Atendimento.");return user;}
export async function createStudentTicket({course,category,subject,message}){
 const user=requireUser();const clean={course:String(course||"").toUpperCase(),category:String(category||"Dúvida"),subject:String(subject||"").trim(),message:String(message||"").trim()};
 if(!["ACP","CAO"].includes(clean.course))throw new Error("Curso inválido.");
 if(!clean.subject||!clean.message)throw new Error("Preencha o assunto e a mensagem.");
 const ticketRef=doc(collection(db,"atendimentos"));
 const batchData={uid:user.uid,studentName:user.displayName||user.email?.split("@")[0]||"Aluno",studentEmail:user.email||"",course:clean.course,category:clean.category,subject:clean.subject,status:"new",createdAt:serverTimestamp(),updatedAt:serverTimestamp()};
 const {writeBatch}=await import("https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js");
 const batch=writeBatch(db);batch.set(ticketRef,batchData);
 const msgRef=doc(collection(db,"atendimentos",ticketRef.id,"messages"));
 batch.set(msgRef,{text:clean.message,senderUid:user.uid,senderName:batchData.studentName,senderRole:"student",createdAt:serverTimestamp()});
 await batch.commit();return ticketRef.id;
}
export function watchStudentTickets(uid,callback,onError){
 const q=query(collection(db,"atendimentos"),where("uid","==",uid),limit(100));
 return onSnapshot(q,snap=>{const rows=snap.docs.map(d=>({id:d.id,...d.data()}));rows.sort((a,b)=>(b.updatedAt?.toMillis?.()||0)-(a.updatedAt?.toMillis?.()||0));callback(rows)},onError);
}
export function watchTicketMessages(ticketId,callback,onError){
 const q=query(collection(db,"atendimentos",ticketId,"messages"),orderBy("createdAt","asc"),limit(200));
 return onSnapshot(q,snap=>callback(snap.docs.map(d=>({id:d.id,...d.data()}))),onError);
}
export async function sendStudentReply(ticketId,text){
 const user=requireUser();const value=String(text||"").trim();if(!value)throw new Error("Digite uma mensagem.");
 const {writeBatch}=await import("https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js");
 const batch=writeBatch(db);const parent=doc(db,"atendimentos",ticketId);
 const msg=doc(collection(db,"atendimentos",ticketId,"messages"));
 batch.set(msg,{text:value,senderUid:user.uid,senderName:user.displayName||user.email?.split("@")[0]||"Aluno",senderRole:"student",createdAt:serverTimestamp()});
 batch.update(parent,{updatedAt:serverTimestamp()});await batch.commit();
}


// Oculta o atendimento apenas na lista do aluno; a administração mantém o histórico.
export async function hideStudentTicket(ticketId){const user=requireUser();await updateDoc(doc(db,"atendimentos",ticketId),{hiddenForStudent:true,updatedAt:serverTimestamp()});}
