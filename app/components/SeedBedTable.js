"use client";

import { useEffect, useState } from "react";
import { addSeedBedItem, getFinancialYear, deleteItem } from "../utils/db.js";
import SeedBedForm from "./forms/SeedBedForm.js";
import DeleteButton from "./DeleteButton.js"

const SeedBedTable = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({
    seedbead_data: {
      crop_name: "",
      target: "",
      achivement: "",
      f_year: "",
      crop_session: "",
    },
    user_info: {
      session: "",
      division: "",
      district: "",
      upozila: "",
      user_name: "",
      created_by: "",
      created_at: new Date().getDate(),
    },
  });

  //This handler control seedbed form modal
  const handleAddClose = () => {
    setShow(!show);
  };

  // This effect using only for data fetching from firestore
  useEffect(() => {
    const getData = async () => {
      const seedbed = await getFinancialYear();
      setData(seedbed);
    };
    getData();
  }, [data]);

  //handle seedbeed data add and edit in database
  const handleAddEdit = async (item) => {
    await addSeedBedItem(item);
  };

  return (
    <>
      {show && (
        <SeedBedForm
          handleClose={handleAddClose}
          handleAddEdit={handleAddEdit}
          newItem={newItem}
          setNewItem={setNewItem}
        />
      )}
      <div className="bg-white p-6 rounded-xl shadow-sm overflow-x-auto">
        {/* Header */}
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Seed Bed Data</h2>
          {/* <AddButton /> */}
          <button
            type="button"
            onClick={handleAddClose}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 relative z-50 cursor-pointer"
          >
            + Add Data
          </button>
        </div>

        <table className="min-w-full text-sm text-left">
          {/* Table Head */}
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">SL</th>
              <th className="px-4 py-3">Financial Year</th>
              <th className="px-4 py-3">Session</th>
              <th className="px-4 py-3">Upozila</th>
              <th className="px-4 py-3">Crop Name</th>
              <th className="px-4 py-3">Target</th>
              <th className="px-4 py-3">Achivement</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y">
            {data.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{index + 1}</td>
                <td className="px-4 py-3">
                  {item.seedbead_data.f_year}
                </td>
                <td className="px-4 py-3">{item.seedbead_data.crop_session}</td>
                <td className="px-4 py-3">{item.user_info.upozila}</td>
                <td className="px-4 py-3">{item.seedbead_data.crop_name}</td>
                <td className="px-4 py-3">{item.seedbead_data.target}</td>

                {/* New Columns */}
                <td className="px-4 py-3">{item.seedbead_data.achivement}</td>
                {/* Actions */}
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-3">
                    <button className="flex items-center gap-1 px-3 py-1.5 text-sm bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100">
                      Edit
                    </button>

                    <DeleteButton deleteItem= {deleteItem} itemId= {item.id}/>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      ;
    </>
  );
};

export default SeedBedTable;
