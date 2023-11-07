import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVtW7WTAezCaVahmz0DUJaAYf002tPsU8",
  authDomain: "th1nkers-eshop.firebaseapp.com",
  projectId: "th1nkers-eshop",
  storageBucket: "th1nkers-eshop.appspot.com",
  messagingSenderId: "719309170418",
  appId: "1:719309170418:web:df00520e24b6568dc9926b",
  measurementId: "G-37BRHL3GC9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
