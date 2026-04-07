import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4yUrgV2F-L2tZ5dw7CYKbE8ntOct-l14",
  authDomain: "deep-heart-24084.firebaseapp.com",
  projectId: "deep-heart-24084",
  storageBucket: "deep-heart-24084.firebasestorage.app",
  messagingSenderId: "277492526087",
  appId: "1:277492526087:web:91a4496a9bc8f59f65cea2",
  measurementId: "G-78Z9C9M1RC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // ส่งออก db ไปใช้ที่อื่น