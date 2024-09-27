// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk7ckPN2plkX_pFWf1CNxfcmWzNPKZApA",
  authDomain: "authentication-ef6df.firebaseapp.com",
  projectId: "authentication-ef6df",
  storageBucket: "authentication-ef6df.appspot.com",
  messagingSenderId: "409543057265",
  appId: "1:409543057265:web:0f226bfe203d0fa54e60d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app