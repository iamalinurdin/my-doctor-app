// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDujfTxSlcpgTRAfxYU9UvWAfVofwZkAZ0",
  authDomain: "simple-blog-5b662.firebaseapp.com",
  databaseURL: "https://simple-blog-5b662.firebaseio.com",
  projectId: "simple-blog-5b662",
  storageBucket: "simple-blog-5b662.appspot.com",
  messagingSenderId: "730536098993",
  appId: "1:730536098993:web:fd07f08a8cd422ea253690",
  measurementId: "G-P5M63MDRSM"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

export default firebase