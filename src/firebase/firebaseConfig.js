import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAVTNfmE3btEtaGVfaDsyqZ998QBOcdsuI",
    authDomain: "listagastosreact.firebaseapp.com",
    projectId: "listagastosreact",
    storageBucket: "listagastosreact.appspot.com",
    messagingSenderId: "601698990838",
    appId: "1:601698990838:web:a40573f0eddf00873b4ad7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export {auth,db};
