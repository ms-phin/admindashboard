// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5fh1OtwPSKTjy9QZAGSe5d8nsAHdganE",
  authDomain: "admin-dashboard-8aa7f.firebaseapp.com",
  projectId: "admin-dashboard-8aa7f",
  storageBucket: "admin-dashboard-8aa7f.appspot.com",
  messagingSenderId: "475634784584",
  appId: "1:475634784584:web:dd1812e4c5a229cd663b7d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app); 
