// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJcMLPS16B_PhHXESJn-mKzX1W-dKb6Vw",
  authDomain: "user-email-pass-46182.firebaseapp.com",
  projectId: "user-email-pass-46182",
  storageBucket: "user-email-pass-46182.appspot.com",
  messagingSenderId: "52595649616",
  appId: "1:52595649616:web:968058adeda22c218f7555"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;