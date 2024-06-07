 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDw3wpQ4EMKSGjAKaq6LnPFXrF-1KYyEI",
  authDomain: "fir-contact-data.firebaseapp.com",
  projectId: "fir-contact-data",
  storageBucket: "fir-contact-data.appspot.com",
  messagingSenderId: "779384358599",
  appId: "1:779384358599:web:61e4c3f8aba5070ea060e2",
  measurementId: "G-LXTQW7XY1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);