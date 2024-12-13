// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTkytAQNx_DJjLFMIbVkduxeHKLVbqHKI",
  authDomain: "netflixgpt-4ba5d.firebaseapp.com",
  projectId: "netflixgpt-4ba5d",
  storageBucket: "netflixgpt-4ba5d.firebasestorage.app",
  messagingSenderId: "551961369926",
  appId: "1:551961369926:web:d7a47aa86013c241591947",
  measurementId: "G-K8NPNDVNQ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
