import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC6fyM5a4LR6WECi1zqdL5v66DGGCmUI64",
    authDomain: "signin-52219.firebaseapp.com",
    projectId: "signin-52219",
    storageBucket: "signin-52219.appspot.com",
    messagingSenderId: "289536503233",
    appId: "1:289536503233:web:6a6a256bdbb05eb78bd340",
    measurementId: "G-9LLX3K4215"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);