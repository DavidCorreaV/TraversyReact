import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB9FYs0c32sBg-VLFOXZtq3ouaXx9wflcA",
    authDomain: "house-marketplace-2022.firebaseapp.com",
    projectId: "house-marketplace-2022",
    storageBucket: "house-marketplace-2022.appspot.com",
    messagingSenderId: "53940467903",
    appId: "1:53940467903:web:8091db576f8c75150fee0a",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();