// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUewrQZCp6BL301IN1DGSmcrGyaiyyUjw",
  authDomain: "ddproperty-e4656.firebaseapp.com",
  projectId: "ddproperty-e4656",
  storageBucket: "ddproperty-e4656.appspot.com",
  messagingSenderId: "1049563591412",
  appId: "1:1049563591412:web:438360e88090a5d22ba4a1",
  measurementId: "G-D3DZR4KMY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
