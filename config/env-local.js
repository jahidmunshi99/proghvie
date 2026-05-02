import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ✅ Correct config (no nesting)
const firebaseConfig = {
  apiKey: "AIzaSyD0utNHCwnbkvvYixpKCW4H5zwNoli-C9Q",
  authDomain: "dmrs-db.firebaseapp.com",
  projectId: "dmrs-db",
  storageBucket: "dmrs-db.firebasestorage.app",
  messagingSenderId: "188635567203",
  appId: "1:188635567203:web:b3c1e9009760f990c6d456",
};

// ✅ Initialize
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
