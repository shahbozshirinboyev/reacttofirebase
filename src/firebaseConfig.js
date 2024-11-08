// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPUBRyVnYEUIa4ClEtTwbEdMDxgpBz1Y0",
  authDomain: "reacttofirebase-cc2e5.firebaseapp.com",
  projectId: "reacttofirebase-cc2e5",
  storageBucket: "reacttofirebase-cc2e5.firebasestorage.app",
  messagingSenderId: "681966752374",
  appId: "1:681966752374:web:258f534e72779115c28557",
  measurementId: "G-RTF3RSDJ4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };