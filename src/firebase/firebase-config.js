import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6DeDXU4RPVqfXt43a6b8mMmSRlZu3myU",
  authDomain: "react-journal-app-d17aa.firebaseapp.com",
  projectId: "react-journal-app-d17aa",
  storageBucket: "react-journal-app-d17aa.appspot.com",
  messagingSenderId: "679295275476",
  appId: "1:679295275476:web:12941bec45a9bd8c5a4641",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
