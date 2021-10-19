// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import React from "react";
import {initializeApp  } from "firebase/app"
import { getAnalytics } from "firebase/analytics";

// import firebase   from "firebase/app"
 import { collection, getDocs ,getFirestore ,  doc, onSnapshot } from "firebase/firestore"; 
// import { getAuth, createUserWithEmailAndPassword ,GoogleAuthProvider} from "firebase/auth";

// import au

const firebaseConfig = {

  apiKey: "AIzaSyBo-wVk7mAdoImoyWDzB3Uws47VutuqNQA",

  authDomain: "mafiachat-7720d.firebaseapp.com",

  databaseURL: "https://mafiachat-7720d-default-rtdb.firebaseio.com",

  projectId: "mafiachat-7720d",

  storageBucket: "mafiachat-7720d.appspot.com",

  messagingSenderId: "132783019284",

  appId: "1:132783019284:web:d5e3ec74c71a9e63a99e01",

  measurementId: "G-DGCWQDXY0D"

};


  const app = initializeApp(firebaseConfig);
  
  const db = getFirestore(app)
  async function GetRooms(){
    const querySnapshot = await getDocs(collection(db, "/rooms"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data().name);
    });
  }

   export default db

  // const db = getFirestore(firebaseConfig)
  // const auth = getAuth()
  // const provider = new GoogleAuthProvider()
  

  // export {auth,provider};
  // export default db
