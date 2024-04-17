// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqmDX448q862SSKNirpAsTv8lkmkLm-BI",
  authDomain: "baredygtighed.firebaseapp.com",
  projectId: "baredygtighed",
  storageBucket: "baredygtighed.appspot.com",
  messagingSenderId: "884670839619",
  appId: "1:884670839619:web:0281a52f7f1f447122cdf6",
  measurementId: "G-TT8MHCKWCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
