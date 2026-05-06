import React from 'react'
import TopBar from './TopBar'
import SeedBedTable from '../tables/SeedBedTable'
import CultivationTable from '../tables/CultivationTable'
import ProductionTable from '../tables/ProductionTable'

const CropsBoard = () => {
  return (
    <>
      <TopBar/>
      <SeedBedTable/>
      <CultivationTable/>
      <ProductionTable/>
    </>
  )
}

export default CropsBoard