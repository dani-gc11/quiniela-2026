import { db } from "./firebase-config.js";

import {
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  onSnapshot
}
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

export async function savePlayer(name,predictions){

  const id = name
    .trim()
    .toLowerCase()
    .replace(/\s+/g,"_");

  await setDoc(
    doc(db,"players",id),
    {
      name,
      predictions,
      createdAt: Date.now()
    }
  );
}

export async function loadPlayers(){

  const snap = await getDocs(
    collection(db,"players")
  );

  return snap.docs.map(d=>d.data());
}

export async function saveResult(matchId,h,a){

  await setDoc(
    doc(db,"results",matchId),
    {
      h,
      a
    }
  );
}

export function watchPlayers(callback){

  return onSnapshot(
    collection(db,"players"),
    snapshot=>{

      const players =
        snapshot.docs.map(d=>d.data());

      callback(players);
    }
  );
}

export function watchResults(callback){

  return onSnapshot(
    collection(db,"results"),
    snapshot=>{

      const results={};

      snapshot.docs.forEach(docu=>{

        results[docu.id]=docu.data();

      });

      callback(results);
    }
  );
}
