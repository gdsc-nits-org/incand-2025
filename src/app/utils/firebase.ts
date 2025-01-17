import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl8I4fb_2G2edsBPgjVOXVRSDjKnkZvDI",
  authDomain: "incand-25.firebaseapp.com",
  projectId: "incand-25",
  storageBucket: "incand-25.firebasestorage.app",
  messagingSenderId: "277237383011",
  appId: "1:277237383011:web:eaa8820dc22fa4ccbb1d56",
  measurementId: "G-54V3WCPLRE"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app)
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Failed to set persistence:", error);
});


export {app, auth}