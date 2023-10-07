// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVYtnkJ65YtRi9Ep_iTwRC-Zft-qy8lac",
  authDomain: "event-management-7bff9.firebaseapp.com",
  projectId: "event-management-7bff9",
  storageBucket: "event-management-7bff9.appspot.com",
  messagingSenderId: "738102835854",
  appId: "1:738102835854:web:b1b1b3b5040c75b543e7df"
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;