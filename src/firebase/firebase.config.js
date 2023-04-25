// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByooAa6GgCpmrdzkQUQFYsogZLAs7Wch4",
    authDomain: "ema-jhon-auth-e8a9a.firebaseapp.com",
    projectId: "ema-jhon-auth-e8a9a",
    storageBucket: "ema-jhon-auth-e8a9a.appspot.com",
    messagingSenderId: "16846017211",
    appId: "1:16846017211:web:21fdc702ce22b672088f9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app