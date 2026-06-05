// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAGh3KwzvhnGB7we3-lx1ggMudII2SjkM",
  authDomain: "quiniela-2026-56304.firebaseapp.com",
  projectId: "quiniela-2026-56304",
  storageBucket: "quiniela-2026-56304.firebasestorage.app",
  messagingSenderId: "620239815312",
  appId: "1:620239815312:web:bee7b59c77cffb1b410e15",
  measurementId: "G-5SNZB7QK75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
