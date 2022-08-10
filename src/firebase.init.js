// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9AoDRyMUc1WMo1xJSx4tkAphHAmbQ_QQ",
    authDomain: "user-management-system-9ddc6.firebaseapp.com",
    projectId: "user-management-system-9ddc6",
    storageBucket: "user-management-system-9ddc6.appspot.com",
    messagingSenderId: "921487624501",
    appId: "1:921487624501:web:8e30be505f0969cb63a47c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;