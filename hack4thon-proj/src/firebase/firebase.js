// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsITXZMrVwEMtya7dLW5Fpp4zuq2QjkM8",
  authDomain: "hack4thon-proj.firebaseapp.com",
  projectId: "hack4thon-proj",
  storageBucket: "hack4thon-proj.firebasestorage.app",
  messagingSenderId: "602979213621",
  appId: "1:602979213621:web:f269a7820fe9e06a9dec7c",
  measurementId: "G-QRE0TXKL6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);