// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1ornhmVGhnn2FYR50rqijGiCaYIjMGhc",
  authDomain: "netfixgpt-14425.firebaseapp.com",
  projectId: "netfixgpt-14425",
  storageBucket: "netfixgpt-14425.firebasestorage.app",
  messagingSenderId: "33175041233",
  appId: "1:33175041233:web:e2f8dc928c467bbee381f0",
  measurementId: "G-DTJY5SK03C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
