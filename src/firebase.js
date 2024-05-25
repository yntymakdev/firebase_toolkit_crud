import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4FurFFXb1TbNucIzxhh97vZ5jVYFkE1Q",
  authDomain: "lilia-a182f.firebaseapp.com",
  projectId: "lilia-a182f",
  storageBucket: "lilia-a182f.appspot.com",
  messagingSenderId: "731930800529",
  appId: "1:731930800529:web:339395c78779e5546aaa30",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth(app);
export default app;
