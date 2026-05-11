import React from 'react'
import CropsBoard from './components/CropsBoard'
import CropsTable from "./components/CropsTable.js"
import Sidebar from './components/Sidebar.js'
const CropInfoPage = () => {
  return (
    <div className='px-[5%] mt-8'>
      <CropsBoard/>
<div className="flex flex-col lg:flex-row gap-6 mt-6">
  <div className="w-full lg:w-[20%]">
    <Sidebar />
  </div>

  <div className="w-full lg:w-[80%]">
    <CropsTable />
  </div>
</div>
      </div>

  )
}

export default CropInfoPage