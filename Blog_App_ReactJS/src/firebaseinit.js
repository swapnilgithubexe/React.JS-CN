// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB5x64oz767yINZeye0wix0cUXVXRstMQ",
  authDomain: "blogging-app-4b77a.firebaseapp.com",
  projectId: "blogging-app-4b77a",
  storageBucket: "blogging-app-4b77a.firebasestorage.app",
  messagingSenderId: "660506628664",
  appId: "1:660506628664:web:e5080131b156beb87f8ccd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);