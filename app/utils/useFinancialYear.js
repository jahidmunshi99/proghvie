"use client";

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/env-local.js";

export const useFinancialYear = () => {
  const [fyear, setFyear] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, "finalcial_years");
        const snapshot = await getDocs(colRef);
        const cropInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setFyear(cropInfo);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return { fyear };
};
