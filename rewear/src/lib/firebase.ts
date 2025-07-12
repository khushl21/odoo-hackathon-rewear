// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAGqv5T0GD9wBAMwhLviooli1SEifyqUZc",
    authDomain: "odoo-rewear.firebaseapp.com",
    projectId: "odoo-rewear",
    storageBucket: "odoo-rewear.firebasestorage.app",
    messagingSenderId: "327495936498",
    appId: "1:327495936498:web:b99440599bac89bc40636b",
    measurementId: "G-ZVBXPM8X69"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 