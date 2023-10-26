// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-Jy95TQCgnR9gGvmjky3MyYyVnvv85ZU",
  authDomain: "netflix-gpt-a9567.firebaseapp.com",
  projectId: "netflix-gpt-a9567",
  storageBucket: "netflix-gpt-a9567.appspot.com",
  messagingSenderId: "621987468978",
  appId: "1:621987468978:web:823afd9ead81aa5f265bab",
  measurementId: "G-V0TWL86BEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();