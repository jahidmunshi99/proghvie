"use client";

import { useEffect, useState } from "react";
import { getFinancialYear } from "../../utils/db.js";
import CloseButton from "../CloseButton.js";

const SeedBedForm = ({ handleClose }) => {
  const [years, setYears] = useState([]);
  const [formData, setFormData] = useState({
    year: "",
    session: "",
    upozila: "",
    crop: "",
    land: "",
    seedbed: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getFinancialYear();
      setYears(result);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
            value={""}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

          {/* Crop */}
          <input
            type="text"
            name="crop"
            placeholder="Crop Name"
            value={""}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

          {/* Target */}
          <input
            type="text"
            name="land"
            placeholder="Target (e.g. 120 Acres)"
            value={""}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

          {/* Achievement */}
          <input
            type="text"
            name="seedbed"
            placeholder="Achievement (e.g. 15 Acres)"
            value={""}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-3">
            <CloseButton handleClose={handleClose} />

            <button
              type="submit"
              className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SeedBedForm;
