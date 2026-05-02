import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../config/env-local.js";

export const getFinancialYear = async () => {
  const colRef = collection(db, "reports");
  const snapshot = await getDocs(colRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const addSeedBedItem = async (data) => {
  const docRef = await addDoc(collection(db, "reports"), data);
  console.log("Document written with ID: ", docRef.id);
};
