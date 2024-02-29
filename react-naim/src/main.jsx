import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAHk_bYrSvZasXkMsA6QibrY9SWpk-zuZg",
  authDomain: "naimreact-d3b88.firebaseapp.com",
  projectId: "naimreact-d3b88",
  storageBucket: "naimreact-d3b88.appspot.com",
  messagingSenderId: "776860078444",
  appId: "1:776860078444:web:7a31608c4043f8f67aa349"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


