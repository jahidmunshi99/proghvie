import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Function
export const getFinancialYear = async () => {
  const colRef = collection(db, "finalcial_years");
  const snapshot = await getDocs(colRef);
  console.log("db is connected");
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
