import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAe-7EhJaSHgewUuRlGzQbBy0cOtejecYw",
    authDomain: "fir-80869.firebaseapp.com",
    projectId: "fir-80869",
    storageBucket: "fir-80869.appspot.com",
    messagingSenderId: "48691175094",
    appId: "1:48691175094:web:bbf1108ff2665a8dc61017",
    measurementId: "G-JGR943DT96"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };