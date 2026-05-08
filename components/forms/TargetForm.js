import { Suspense } from "react";
import { useCropList } from "../../app/utils/useCropList.js";
import { useAllData } from "../../app/utils/useData.js";
import CloseButton from "../../components/buttons/CloseButton.js";
import SubmitButton from "../../components/buttons/SubmitButton.js";

const TargetFrom = ({ handleClose, handleAddEdit, newItem, setNewItem }) => {
  const { divisions, districts, upazilas } = useAllData();
  const { crops } = useCropList();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "upozila") {
      setNewItem((prev) => ({
        ...prev,
        user_info: {
          ...prev.user_info,
          [name]: value,
        },
      }));
    } else {
      setNewItem((prev) => ({
        ...prev,
        seedbead_data: {
          ...prev.seedbead_data,
          [name]: value,
        },
      }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Crops Target</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Financial Year */}
            <input
              type="text"
              name="f_year"
              value={newItem?.seedbead_data?.f_year}
              placeholder="Financial Year (e.g. 2024-25)"
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
            />

            {/* Session */}
            <select
              name="crop_session"
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg"
              required
            >
              <option value="">Select Session</option>
              <option value="Rabi">Rabi</option>
              <option value="Kharif">Kharif</option>
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
