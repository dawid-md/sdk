// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6HZvLNKix0oZn934w87Izs2AwcHWDtuw",
  authDomain: "sdk-auth-9ccf1.firebaseapp.com",
  projectId: "sdk-auth-9ccf1",
  storageBucket: "sdk-auth-9ccf1.appspot.com",
  messagingSenderId: "520447303234",
  appId: "1:520447303234:web:3e3d1f928ba379e3aa17db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()