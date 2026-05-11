"use client";

import { useState } from "react";
import EditAchievementModal from "./forms/EditAchivementModal";
import RecordDetailsModal from "./forms/RecordDetailsModal";
import Sidebar from "./Sidebar";
import AchivementTable from "./tables/AchivementTable";

const Board = () => {
  const [show, setShow] = useState(true);
  const [editModal, setEditModal] = useState(false);
  return (
    <>
      {show && <RecordDetailsModal />}
      {editModal && <EditAchievementModal />}
      <div className="bg-gray-200 py-10">
        <div className="w-[95%] mx-auto ">
          <div className="flex flex-col lg:flex-row gap-6 mt-6">
            <div className="w-full lg:w-[20%]">
              <Sidebar />
            </div>

            <div className="w-full lg:w-[80%]">
              <AchivementTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
