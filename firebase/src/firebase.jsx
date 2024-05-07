// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa8leBgLIjEr-JZm2R3QqzwjrlnwuCTrU",
  authDomain: "log-in-508fe.firebaseapp.com",
  databaseURL: "https://log-in-508fe-default-rtdb.firebaseio.com",
  projectId: "log-in-508fe",
  storageBucket: "log-in-508fe.appspot.com",
  messagingSenderId: "53793981536",
  appId: "1:53793981536:web:4f1d57a3a67977e6036f05"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);