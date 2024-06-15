// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-next-584be.firebaseapp.com",
  projectId: "insta-next-584be",
  storageBucket: "insta-next-584be.appspot.com",
  messagingSenderId: "59913537979",
  appId: "1:59913537979:web:ecd8249814c6fe61915c9e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);