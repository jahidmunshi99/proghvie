import { Suspense, useState } from "react";
import { addTarget } from "../../app/utils/db.js";
import { useCropList } from "../../app/utils/useCropList.js";
import { useAllData } from "../../app/utils/useData.js";
import { useFinancialYear } from "../../app/utils/useFinancialYear.js";
import CloseButton from "../../components/buttons/CloseButton.js";
import SubmitButton from "../../components/buttons/SubmitButton.js";

const TargetFrom = ({ handleClose, handleAddEdit, newItem, setNewItem }) => {
  const { divisions, districts, upazilas } = useAllData();
  const { crops } = useCropList();
  const { fyear } = useFinancialYear();

  const [items, setItems] = useState([
    {
      category: "seedbed",
      createdBy: "",
      crop_name: "",
      crop_session: "",
      crop_type: {
        hybrid: "",
        hyv: "",
        local: "",
      },
      districtId: "",
      divisionId: "",
      f_year: "",
      upazilaId: "",
      createdAt: new Date().toDateString(),
    },
  ]);

  const handleSubmitForm = () => {
    addTarget();
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setItems({
      [name]: value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Crops Target</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Financial Year */}
            <select
              name="f_year"
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg"
              required
            >
              <option value="">Select Session</option>
              {fyear?.map((item) => (
                <option key={item.f_year} value={item.f_year}>
                  {item.f_year}
                </option>
              ))}
            </select>
            {/* Session */}
            <select
              name="crop_session"
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg"
              required
            >
              <option value="">Select Session</option>
              <option value="kharif-1">Kharif-1</option>
              <option value="kharif-2">Kharif-2</option>
              <option value="robi">Robi</option>
            </select>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {/* Division */}
            <select
              name="divisionId"
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg capitalize"
              required
            >
              <option value="">Select Division</option>
              <Suspense>
                {divisions.map((item) => (
                  <option key={item.divisionId} value="Rabi">
                    {item.divisionId}
                  </option>
                ))}
              </Suspense>
            </select>
            {/* District */}
            <select
              name="districtId"
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg capitalize"
              required
            >
              <option value="">Select District</option>
              <Suspense>
                {districts.map((item) => (
                  <option key={item.districtId} value="Rabi">
                    {item.districtId}
                  </option>
                ))}
              </Suspense>
            </select>
            {/* Upozila */}
            <select
              name="upazilaId"
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg capitalize"
              required
            >
              <option value="">Select Upazila</option>
              <Suspense>
                {upazilas.map((item) => (
                  <option key={item.upazilaId} value="Rabi">
                    {item.upazilaId}
                  </option>
                ))}
              </Suspense>
            </select>
          </div>
          {/* Crop */}
          <select
            name="cropId"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg ca capitalize"
            required
          >
            <option value="">Select Crop</option>
            {crops.map((item) => (
              <option key={item.cropId} value={item.cropId}>
                {item.cropId}
              </option>
            ))}
          </select>

          {/* Seedbed Target */}
          <input
            type="text"
            name="target"
            placeholder="Seedbed Target (e.g. 120 Acres)"
            value={newItem?.seedbead_data?.target || ""}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

          {/* Crop Swing Target */}
          <input
            type="text"
            name="target"
            placeholder="Crop Swing Target (e.g. 120 Acres)"
            value={newItem?.seedbead_data?.target || ""}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />
          {/* Achievement */}
          {/* <input
            type="text"
            name="achivement"
            placeholder="Achievement (e.g. 15 Acres)"
            value={newItem?.seedbead_data?.achivement || ""}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          /> */}

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-3">
            <CloseButton handleClose={handleClose} />
            <SubmitButton handleAddEdit={handleAddEdit} newItem={newItem} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TargetFrom;
