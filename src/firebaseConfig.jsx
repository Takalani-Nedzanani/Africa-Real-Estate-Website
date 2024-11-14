// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCJqBmSimLnjnafNoWNFNjOoO-cILG8cWs",
    authDomain: "africa-real-estate.firebaseapp.com",
    projectId: "africa-real-estate",
    storageBucket: "africa-real-estate.firebasestorage.app",
    messagingSenderId: "886722366229",
    appId: "1:886722366229:web:65b291e67137c90f3fb71c",
    measurementId: "G-H4XNX8DR4H"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
