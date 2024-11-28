import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCf7mH9cI6OyELeIKre3bb2rOZKTnxsB44",
  authDomain: "miniblog-60b90.firebaseapp.com",
  projectId: "miniblog-60b90",
  storageBucket: "miniblog-60b90.firebasestorage.app",
  messagingSenderId: "111142681033",
  appId: "1:111142681033:web:4c13725c7a51e30e4f1018",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
