
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBkYPtfc30FneosdHZudALeaaF_rb3ncv8",
  authDomain: "campus-hub-cu.firebaseapp.com",
  projectId: "campus-hub-cu",
  storageBucket: "campus-hub-cu.appspot.com",
  messagingSenderId: "842543607008",
  appId: "1:842543607008:web:809d0af6ace6c9b4bf3485",
  measurementId: "G-542T39032T"
};


const app = initializeApp(firebaseConfig);
const auth =  getAuth();
 export{app,auth};