// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz2YqKAtgD55EdwtDvOMUu9-B-a2R1NQE",
  authDomain: "task-manage-aec08.firebaseapp.com",
  projectId: "task-manage-aec08",
  storageBucket: "task-manage-aec08.appspot.com",
  messagingSenderId: "760036935658",
  appId: "1:760036935658:web:00df94267973feb8e59493"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;