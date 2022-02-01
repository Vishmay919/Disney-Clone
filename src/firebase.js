import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBIsbx7wJZUjQFEA5TkxK5ub3VBmudBHVM",
  authDomain: "disneyplus-clone-cd31c.firebaseapp.com",
  projectId: "disneyplus-clone-cd31c",
  storageBucket: "disneyplus-clone-cd31c.appspot.com",
  messagingSenderId: "59937756348",
  appId: "1:59937756348:web:a4b45d68b6e8979b14acb9",
  measurementId: "G-38841P01DK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
