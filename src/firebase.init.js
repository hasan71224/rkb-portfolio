// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALbM0vrCnTzTOLoKwMLBqj3k5L5qqClC8",
  authDomain: "developer-portfolio-45296.firebaseapp.com",
  projectId: "developer-portfolio-45296",
  storageBucket: "developer-portfolio-45296.appspot.com",
  messagingSenderId: "321397029109",
  appId: "1:321397029109:web:ee056fc9fc00fe157eedbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;