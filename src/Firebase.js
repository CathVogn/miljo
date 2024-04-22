
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB6-UBSZPf2MSX2JITh_ouIHLMzYyw4iNY",
  authDomain: "book-mode.firebaseapp.com",
  projectId: "book-mode",
  storageBucket: "book-mode.appspot.com",
  messagingSenderId: "376439374364",
  appId: "1:376439374364:web:d1ae7b351571fa4206d5d9",
  measurementId: "G-5J8C8HE6EC"
}; 

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db= getFirestore(app);
