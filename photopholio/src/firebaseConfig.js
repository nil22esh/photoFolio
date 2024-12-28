// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-24wmJIUvuOOhDNHOYYvz0mw7LG0zIDE",
  authDomain: "photopholio-app-a401b.firebaseapp.com",
  projectId: "photopholio-app-a401b",
  storageBucket: "photopholio-app-a401b.firebasestorage.app",
  messagingSenderId: "892895024324",
  appId: "1:892895024324:web:b17ffd2ec53ac5a805a591",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;
