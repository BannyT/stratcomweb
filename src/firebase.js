// src/firebase.js
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile 
} from "firebase/auth";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc, 
  onSnapshot, 
  query, 
  orderBy 
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZIK7MGSeJJplSHNszTft9FGXbbkkH2HQ",
  authDomain: "stratcom-8d562.firebaseapp.com",
  projectId: "stratcom-8d562",
  storageBucket: "stratcom-8d562.firebasestorage.app",
  messagingSenderId: "437925309004",
  appId: "1:437925309004:web:20b126609920e5be1ea2e9",
  measurementId: "G-N69MC6WNFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export auth, db, and all needed Firestore functions
export { 
  auth,
  db,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  updateProfile,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy
};