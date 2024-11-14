// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp6-RrW4ruPQEw0DcrQiCazfJ7kgrIQKM",
  authDomain: "auth-context-db905.firebaseapp.com",
  projectId: "auth-context-db905",
  storageBucket: "auth-context-db905.firebasestorage.app",
  messagingSenderId: "807377098173",
  appId: "1:807377098173:web:121addca93dc38b6782ed4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);