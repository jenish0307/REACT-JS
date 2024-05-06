import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBGEouc91ICJ0KobR49ISGBBWeJsfTn0lE",
    authDomain: "react-ef392.firebaseapp.com",
    projectId: "react-ef392",
    storageBucket: "react-ef392.appspot.com",
    messagingSenderId: "362842261238",
    appId: "1:362842261238:web:9da10996d583d3b55b0ed7",
    measurementId: "G-7MZBD8852Y"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };