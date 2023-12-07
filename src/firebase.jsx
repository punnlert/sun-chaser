// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAE24xfw_cU-iF7WmBmOwrHteqF7m3KHqk",
    authDomain: "sunset-5c720.firebaseapp.com",
    projectId: "sunset-5c720",
    storageBucket: "sunset-5c720.appspot.com",
    messagingSenderId: "668439479442",
    appId: "1:668439479442:web:4c680933528b7cf2ba124b",
    measurementId: "G-GN6PW7NK5J"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);