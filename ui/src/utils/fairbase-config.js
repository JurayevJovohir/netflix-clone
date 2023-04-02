// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZHAEBckmXBGgcNQxYXfALIuGBfZ8tYW4",
  authDomain: "netflix-react-7c1a1.firebaseapp.com",
  projectId: "netflix-react-7c1a1",
  storageBucket: "netflix-react-7c1a1.appspot.com",
  messagingSenderId: "757933020074",
  appId: "1:757933020074:web:57a52ceef32066046d51d3",
  measurementId: "G-3DBN6G8V3F"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);