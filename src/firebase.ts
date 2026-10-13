// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeUHydAkpTqgO_5l9xzt9Z8WX1ak50_fA",
  authDomain: "clerkly-materea.firebaseapp.com",
  projectId: "clerkly-materea",
  storageBucket: "clerkly-materea.firebasestorage.app",
  messagingSenderId: "84747309603",
  appId: "1:84747309603:web:cc7c6d1f4457fb6fcbd796",
  measurementId: "G-ZLP47F9K09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Set auth persistence to 'local'. This is the key for offline access.
// It ensures the user's session is saved on the device and they remain
// logged in even when the app is closed or offline.
setPersistence(auth, browserLocalPersistence);

export { app, analytics, auth };
