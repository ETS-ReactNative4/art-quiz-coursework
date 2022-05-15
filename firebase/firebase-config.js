// import * as firebase from "firebase";
// import "firebase/firestore";

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyDbmRFeDS0gqwEJvkp5wGYFRsMRc_s13Rg",
//   authDomain: "art-quiz-72d97.firebaseapp.com",
//   databaseURL: "https://art-quiz-72d97-default-rtdb.firebaseio.com",
//   projectId: "art-quiz-72d97",
//   storageBucket: "art-quiz-72d97.appspot.com",
//   messagingSenderId: "952007143485",
//   appId: "1:952007143485:web:1cf1775531c8d1e2503a54",
// });

// export const fireDB = app.firestore();
// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbmRFeDS0gqwEJvkp5wGYFRsMRc_s13Rg",
  authDomain: "art-quiz-72d97.firebaseapp.com",
  databaseURL: "https://art-quiz-72d97-default-rtdb.firebaseio.com",
  projectId: "art-quiz-72d97",
  storageBucket: "art-quiz-72d97.appspot.com",
  messagingSenderId: "952007143485",
  appId: "1:952007143485:web:1cf1775531c8d1e2503a54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
