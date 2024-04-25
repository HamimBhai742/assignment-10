// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyP9l6GlkfnRW_aNBdxJfAbOVwZIaJqic",
    authDomain: "carf-and-art.firebaseapp.com",
    projectId: "carf-and-art",
    storageBucket: "carf-and-art.appspot.com",
    messagingSenderId: "225976196460",
    appId: "1:225976196460:web:cd8508e67c266fc8e0e749"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app