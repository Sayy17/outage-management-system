// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcy5YY-u5AGQfTKb7NU8a4RlzN3qF_2OY",
  authDomain: "outage-management-system-48494.firebaseapp.com",
  projectId: "outage-management-system-48494",
  storageBucket: "outage-management-system-48494.firebasestorage.app",
  messagingSenderId: "422668493126",
  appId: "1:422668493126:web:995a1c99102a6a7e654547",
  measurementId: "G-G1H15PQL60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);