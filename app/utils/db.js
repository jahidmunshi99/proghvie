import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../config/env-local.js";

//Fetch Data from DB
// ==================================

//fetch years
export const getFinancialYear = async () => {
  const colRef = collection(db, "targets");
  const snapshot = await getDocs(colRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getAchivement = async () => {
  const colRef = collection(db, "achievements");
  const snapshot = await getDocs(colRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

//fetch users
export const getUsers = async () => {
  const colRef = collection(db, "users");
  const snapshot = await getDocs(colRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Fetch Seedbed Collections information
export const addSeedBedItem = async (data) => {
  const docRef = await addDoc(collection(db, "reports"), data);
  console.log("Document written with ID: ", docRef.id);
};

export const deleteItem = async (item) => {
  try {
    await deleteDoc(doc(db, "reports", item));
    alert("You have successfully Deleted ites. Item Id:", item);
  } catch (error) {
    console.log(error);
  }
  console.log("This is from firebase Delete Items", item.id);
};

export const getDivision = async () => {
  const colRef = collection(db, "division_data");
  const snapshot = await getDocs(colRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getDistrict = async () => {
  const colRef = collection(db, "district_data");
  const snapshot = await getDocs(colRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getUpozila = async () => {
  const colRef = collection(db, "upozila_data");
  const snapshot = await getDocs(colRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Add new User to DB
export const addUser = async (user) => {
  const docRef = await addDoc(collection(db, "users"), user);
  console.log("Document written with ID: ", docRef.id);
};
