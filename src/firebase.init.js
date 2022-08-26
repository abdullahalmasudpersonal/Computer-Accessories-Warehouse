// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw3tk566FyjFD_2tmHgtJGlpRUVX-HWzA",
  authDomain: "computer-accessories-warehouse.firebaseapp.com",
  projectId: "computer-accessories-warehouse",
  storageBucket: "computer-accessories-warehouse.appspot.com",
  messagingSenderId: "692171612922",
  appId: "1:692171612922:web:97cc5043fd205950a99f43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;