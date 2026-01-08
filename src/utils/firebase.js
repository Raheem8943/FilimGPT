// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYKBixHUVasByGTpzfOmZPSY-5bp07ijQ",
  authDomain: "filimgpt.firebaseapp.com",
  projectId: "filimgpt",
  storageBucket: "filimgpt.firebasestorage.app",
  messagingSenderId: "454642169944",
  appId: "1:454642169944:web:e94e9d0695bb808ff6f22d",
  measurementId: "G-FHWZ1HD59R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
