import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// Your Firebase configuration
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
const auth = getAuth(app);

// Authentication functions
export const loginWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    let errorMessage = "Login failed. Please try again.";
    
    switch (error.code) {
      case 'auth/invalid-email':
        errorMessage = "Invalid email address.";
        break;
      case 'auth/user-not-found':
        errorMessage = "No account found with this email.";
        break;
      case 'auth/wrong-password':
        errorMessage = "Incorrect password.";
        break;
      case 'auth/too-many-requests':
        errorMessage = "Too many failed attempts. Try again later.";
        break;
      default:
        errorMessage = error.message;
    }
    
    return { success: false, error: errorMessage };
  }
};

export const logoutUser = () => {
  return signOut(auth);
};

export const getCurrentUser = () => {
  return auth.currentUser;
};

export { auth, onAuthStateChanged };
export default app;