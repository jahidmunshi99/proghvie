import CloseButton from "../CloseButton.js";
import SubmitButton from "../SubmitButton.js";

const SeedBedForm = ({ handleClose, handleAddEdit, newItem, setNewItem }) => {
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
        <h2 className="text-lg font-semibold mb-4">Seed Bed Information</h2>

        <form className="space-y-4">
          {/* Financial Year */}
          <input
            type="text"
            name="year"
            placeholder="Financial Year (e.g. 2024-25)"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />

          {/* Session */}
          <select
            name="session"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          >
            <option value="">Select Session</option>
            <option value="Rabi">Rabi</option>
            <option value="Kharif">Kharif</option>
          </select>

          {/* Upozila */}
          <input
            type="text"
            name="upozila"
            placeholder="Upozila"
            value={newItem?.user_info?.upozila || ""}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

          {/* Crop */}
          <input
            type="text"
            name="crop_name"
            placeholder="Crop Name"
            value={newItem?.seedbead_data?.crop_name || ""}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

          {/* Target */}
          <input
            type="text"
            name="target"
            placeholder="Target (e.g. 120 Acres)"
            value={newItem?.seedbead_data?.target || ""}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

          {/* Achievement */}
          <input
            type="text"
            name="achivement"
            placeholder="Achievement (e.g. 15 Acres)"
            value={newItem?.seedbead_data?.achivement || ""}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

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

export default SeedBedForm;
