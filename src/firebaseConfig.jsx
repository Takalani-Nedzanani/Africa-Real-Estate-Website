// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "your api key",
    authDomain: "your auth domain",
    projectId: "your project id",
    storageBucket: "your storage bucket",
    messagingSenderId: "your messaging sender id",
    appId: "your app id",
    measurementId: "your measurement id",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
