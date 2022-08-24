// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD17Md5qqramOIoVO-8FTcpGdcZnQrxBso",
  authDomain: "uekichi-diary.firebaseapp.com",
  projectId: "uekichi-diary",
  storageBucket: "uekichi-diary.appspot.com",
  messagingSenderId: "269878884587",
  appId: "1:269878884587:web:8fc22e309e4cce5a6ae6ae",
  measurementId: "G-82FHXDLGBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);