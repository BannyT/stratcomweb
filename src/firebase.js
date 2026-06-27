// src/firebase.js
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZIK7MGSeJJplSHNszTft9FGXbbkkH2HQ",
  authDomain: "stratcom-8d562.firebaseapp.com",
  projectId: "stratcom-8d562",
  storageBucket: "stratcom-8d562.firebasestorage.app",
  messagingSenderId: "437925309004",
  appId: "1:437925309004:web:20b126609920e5be1ea2e9",
  measurementId: "G-N69MC6WNFR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export everything needed
export { 
  auth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile 
};