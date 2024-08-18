// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0dN1J98oYSNV40uBjNHXBOwb2kXczAwg",
  authDomain: "hekto-main.firebaseapp.com",
  projectId: "hekto-main",
  storageBucket: "hekto-main.appspot.com",
  messagingSenderId: "665486532618",
  appId: "1:665486532618:web:dbcf073f484f369104bff3",
  measurementId: "G-R2HGQ2HTDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig