import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl8I4fb_2G2edsBPgjVOXVRSDjKnkZvDI",
  authDomain: "incand-25.firebaseapp.com",
  projectId: "incand-25",
  storageBucket: "incand-25.firebasestorage.app",
  messagingSenderId: "277237383011",
  appId: "1:277237383011:web:eaa8820dc22fa4ccbb1d56",
  measurementId: "G-54V3WCPLRE",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
<<<<<<< HEAD
setPersistence(auth, browserLocalPersistence).catch((error: unknown) => {
=======
setPersistence(auth, browserLocalPersistence).catch((error:unknown) => {
>>>>>>> 652c24a43f128f89e29304c39a9f8fd749526cd2
  if (error instanceof Error) {
    console.error("Failed to set persistence:", error.message);
  } else {
    console.error("An unknown error occurred.");
  }
});

export { app, auth };
