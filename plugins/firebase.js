// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLVCPnZQpdpsQRueXgpRK3M4sPn9H0W4I",
  authDomain: "kazihara-ab0d1.firebaseapp.com",
  projectId: "kazihara-ab0d1",
  storageBucket: "kazihara-ab0d1.appspot.com",
  messagingSenderId: "1028925780851",
  appId: "1:1028925780851:web:2321669ce899f8502e8b06",
  measurementId: "G-VJXX8QNRPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);