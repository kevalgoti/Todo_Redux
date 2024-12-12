import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByGMR6ZqJ_-nHtuMFAghWmM2ARCpieqeg",
  authDomain: "todo-8e2cc.firebaseapp.com",
  projectId: "todo-8e2cc",
  storageBucket: "todo-8e2cc.firebasestorage.app",
  messagingSenderId: "10582122960",
  appId: "1:10582122960:web:d86f55d3ed3261c5c659d5",
  measurementId: "G-4Y9PQXYL6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signOut };