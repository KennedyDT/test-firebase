// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add your own Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBMk73QglADOnbzXpDA-gp7lmB0NjyK_4g",
  authDomain: "proyecto-test-3b03b.firebaseapp.com",
  projectId: "proyecto-test-3b03b",
  storageBucket: "proyecto-test-3b03b.firebasestorage.app",
  messagingSenderId: "93461168083",
  appId: "1:93461168083:web:feb7f6ff2d43d4b808b926",
  measurementId: "G-FRVTEE20ES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 