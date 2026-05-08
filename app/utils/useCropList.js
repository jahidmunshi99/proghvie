"use client";

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/env-local.js";

export const useCropList = () => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, "crops_list");
        const snapshot = await getDocs(colRef);
        const cropInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCrops(cropInfo);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return {
    crops,
  };
};
