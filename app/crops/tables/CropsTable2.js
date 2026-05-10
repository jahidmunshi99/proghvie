"use client";

import { deleteItem } from "../../utils/db.js";
// import SeedBedForm from "./forms/SeedBedForm.js";
import DeleteButton from "../../../components/buttons/DeleteButton.js";
import EditButton from "../../../components/buttons/EditButton.js";
import ViewButton from "../../../components/buttons/ViewButton.js";

const CropsTable2 = ({ label, data }) => {
  const findYear = data.find(
    (item) => item?.f_year === "2025-26" && item?.crop_session === "robi",
    // && item?.category === "seedbed"
  );

  console.log("this is from crop table" + data);
  console.log(findYear?.crop_type);
  // console.log(data);

  const crop = findYear?.crop_type;

  const total = Object.values(crop || {}).reduce(
    (sum, value) => sum + Number(value),
    0,
  );

  //This handler control seedbed form modal
  const handleAddClose = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-sm overflow-x-auto">
        {/* Header */}
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">{label}</h2>
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
                <td className="px-4 py-3 font-medium capitalize">
                  {index + 1}
                </td>
                <td className="px-4 py-3">{item?.f_year}</td>
                <td className="px-4 py-3 capitalize">{item?.crop_session}</td>
                <td className="px-4 py-3 capitalize">{item?.upazilaId}</td>
                <td className="px-4 py-3 capitalize">{item?.crop_name}</td>
                <td className="px-4 py-3">{total}</td>

                {/* New Columns */}
                <td className="px-4 py-3">
                  {item?.seedbead_data ? achivement : "-"}
                </td>
                {/* Actions */}
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-1">
                    <ViewButton />
                    <EditButton />
                    <DeleteButton deleteItem={deleteItem} itemId={item.id} />
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

export default CropsTable2;
