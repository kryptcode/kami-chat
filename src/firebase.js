import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDT9UmCb6sup8bw_ibOhXjYgTK5rlorIp0",
  authDomain: "social-me-477bd.firebaseapp.com",
  projectId: "social-me-477bd",
  storageBucket: "social-me-477bd.appspot.com",
  messagingSenderId: "732478989191",
  appId: "1:732478989191:web:cd42115cacddebbc20e922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore();
const storage = getStorage();
const auth = getAuth(app);


export { db, storage, auth };