// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClxMQ_VC-2TyfyjhlyB-sHDuBrwsoeDfU",
  authDomain: "netflix-gpt-7a556.firebaseapp.com",
  projectId: "netflix-gpt-7a556",
  storageBucket: "netflix-gpt-7a556.appspot.com",
  messagingSenderId: "195451887690",
  appId: "1:195451887690:web:f4b9c376b10502df7c06b3",
  measurementId: "G-CLR53X1SG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//authentication of user
export const auth = getAuth();
