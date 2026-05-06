import React from "react";
import CultivationTable from "../tables/CultivationTable";
import ProductionTable from "../tables/ProductionTable";
import SeedBedTable from "../tables/SeedBedTable";
import TopBar from "./TopBar";

const CropsBoard = () => {
  return (
    <>
      <TopBar />
      <SeedBedTable />
      <CultivationTable />
      <ProductionTable />
    </>
  );
};

export default CropsBoard;
