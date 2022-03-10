// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANgdJ19HiESIWMw-MjChw7YKDkhkWTzWA",
  authDomain: "disneyplus-clone-fe126.firebaseapp.com",
  databaseURL: "disneyplus-clone-fe126.firebaseio.com",
  projectId: "disneyplus-clone-fe126",
  storageBucket: "disneyplus-clone-fe126.appspot.com",
  messagingSenderId: "1005066070777",
  appId: "1:1005066070777:web:ecb370a7943ad6b1055028",
  measurementId: "G-5L54XWSLG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const analytics = getAnalytics(app);

export {auth, provider, storage}
export default db