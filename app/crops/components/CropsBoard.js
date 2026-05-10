"use client"

import React from "react";
import { useEffect, useState } from "react";
import {getTarget} from "../../utils/db.js";
// import CultivationTable from "../tables/CultivationTable";
// import ProductionTable from "../tables/ProductionTable";
// import SeedBedTable from "../tables/SeedBedTable";
import CropsTable from "../tables/CropsTable";
import TopBar from "./TopBar";

const CropsBoard = () => {
    const [data, setData] = useState([]);

    console.log(data)
    useEffect(() => {
      const getData = async () => {
        try {
          const seedbed = await getTarget();
          setData(seedbed);
        } catch (err) {
          console.error(err);
        }
      };
      getData();
    }, []);
  return (
    <>
      <TopBar />
      <CropsTable label={"বীজতলা"} data= {data}/>
      {/* <SeedBedTable />
      <CultivationTable />
      <ProductionTable /> */}
    </>
  );
};

export default CropsBoard;
