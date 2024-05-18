//Only FIREBASE files added here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtLCCqpl3SbQoiPS2NIec4OUpZ-6tX0lc",
    authDomain: "https://sarthakdhasmana.github.io/BabbuTourism/",
    // "babbu-tourism.firebaseapp.com",firebase deploy --only hosting
    projectId: "babbu-tourism",
    storageBucket: "babbu-tourism.appspot.com",
    messagingSenderId: "836838859548",
    appId: "1:836838859548:web:ea9960e0dc12d77d24d0d9",
    measurementId: "G-1NNT1XH7LY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);