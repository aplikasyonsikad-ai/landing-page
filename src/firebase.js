import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQqA8Jdy5gk_nuxyoHKVuiEySP2QKoUio",
  authDomain: "sikad-be3f1.firebaseapp.com",
  projectId: "sikad-be3f1",
  storageBucket: "sikad-be3f1.firebasestorage.app",
  messagingSenderId: "890143544005",
  appId: "1:890143544005:web:f264b385638315024d56ac",
  measurementId: "G-4K7075FLPK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
