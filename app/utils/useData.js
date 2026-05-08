"use client";

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/env-local.js";

export const useAllData = () => {
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRefdiv = collection(db, "division_data");
        const colRefdist = collection(db, "district_data");
        const colRefupaz = collection(db, "upozila_data");

        const snapshotdiv = await getDocs(colRefdiv);

        const div_info = snapshotdiv.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const snapshotdist = await getDocs(colRefdist);

        const dist_info = snapshotdist.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const snapshotupaz = await getDocs(colRefupaz);

        const upaz_info = snapshotupaz.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setDivisions(div_info);
        setDistricts(dist_info);
        setUpazilas(upaz_info);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return {
    divisions,
    districts,
    upazilas,
  };
};
