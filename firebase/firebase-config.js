// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDbmRFeDS0gqwEJvkp5wGYFRsMRc_s13Rg",
  // authDomain: "art-quiz-72d97.firebaseapp.com",
  // databaseURL: "https://art-quiz-72d97-default-rtdb.firebaseio.com",
  // projectId: "art-quiz-72d97",
  // storageBucket: "art-quiz-72d97.appspot.com",
  // messagingSenderId: "952007143485",
  // appId: "1:952007143485:web:1cf1775531c8d1e2503a54",
  apiKey: "AIzaSyDjpNh2lnCQA_U23c7jVKSYHdTaNcSqDpE",
  authDomain: "art-quiz-f50d3.firebaseapp.com",
  projectId: "art-quiz-f50d3",
  storageBucket: "art-quiz-f50d3.appspot.com",
  messagingSenderId: "929602921242",
  appId: "1:929602921242:web:44000a9a100a3d2c3b42a3",
  measurementId: "G-JPVYVEB0DW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
