// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-d3974.firebaseapp.com",
  projectId: "blog-d3974",
  storageBucket: "blog-d3974.appspot.com",
  messagingSenderId: "223295545620",
  appId: "1:223295545620:web:9a403552c919d634196201",
  measurementId: "G-YGXKWNZNCL"
  // authDomain: "mern-blog-10235.firebaseapp.com",
  // projectId: "mern-blog-10235",
  // storageBucket: "mern-blog-10235.appspot.com",
  // messagingSenderId: "716628027879",
  // appId: "1:716628027879:web:44054a5928220d65eeb542"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);