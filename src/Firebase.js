// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6-UBSZPf2MSX2JITh_ouIHLMzYyw4iNY",
  authDomain: "book-mode.firebaseapp.com",
  projectId: "book-mode",
  storageBucket: "book-mode.appspot.com",
  messagingSenderId: "376439374364",
  appId: "1:376439374364:web:d1ae7b351571fa4206d5d9",
  measurementId: "G-5J8C8HE6EC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db= getFirestore(app);
