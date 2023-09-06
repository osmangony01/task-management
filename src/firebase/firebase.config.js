// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC1i82UBckCC_QzPfs-ubfe6-3m8NWYMI",
  authDomain: "explore-bd-log.firebaseapp.com",
  projectId: "explore-bd-log",
  storageBucket: "explore-bd-log.appspot.com",
  messagingSenderId: "475376141936",
  appId: "1:475376141936:web:515c51d5d7d754ae3dd6b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;