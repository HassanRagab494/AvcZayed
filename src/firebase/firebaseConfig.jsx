// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 
const firebaseConfig = {
  apiKey: "AIzaSyBrIwn-xy5cI5m9wdvHPzs9oh4oqsEykvw",
  authDomain: "avcproject-2a0b0.firebaseapp.com",
  projectId: "avcproject-2a0b0",
  storageBucket: "avcproject-2a0b0.appspot.com",
  messagingSenderId: "699715918981",
  appId: "1:699715918981:web:5eb4a5ddab933003259dec"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);

// الحصول على auth و firestore
const auth = getAuth(app);
const db = getFirestore(app); // إذا كنت تستخدم Firestore

export { auth, db };