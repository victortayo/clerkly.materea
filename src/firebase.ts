// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKTs8O7NehsX3R-S5GIyG2049EFvqL7Ug",
  authDomain: "clerklynotes.firebaseapp.com",
  projectId: "clerklynotes",
  storageBucket: "clerklynotes.firebasestorage.app",
  messagingSenderId: "612276545041",
  appId: "1:612276545041:web:e5f003b9d3d4b89bc7f3b0",
  measurementId: "G-VPQWVDX89S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
