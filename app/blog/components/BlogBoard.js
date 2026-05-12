"use client";

import { useState } from "react";

const BlogBoard = () => {
  const [rows, setRows] = useState([
    { name: "BARI Gom-25", achievement_ha: 640 },
    { name: "BARI Gom-28", achievement_ha: 380 },
  ]);

  const VARIETIES = [
    "BARI Gom-25",
    "BARI Gom-26",
    "BARI Gom-28",
    "BARI Gom-30",
    "BARI Gom-32",
    "Sourav",
    "Shatabdi",
    "Local variety",
    "Other",
  ];

  console.log(rows);
  const handleAddRow = () => {
    const usedNames = rows.map((item) => item.name);
    const nextAvailable = VARIETIES.find((i) => !usedNames.includes(i) || "");
    setRows([...rows, { name: nextAvailable, achievement_ha: "0" }]);
  };

  const handleRemoveRow = (i) => {
    const removedItems = rows.filter((_, e) => e !== i);
    console.log(i);
    console.log(removedItems);
    setRows(removedItems);
  };

  const handleChange = (index, field, value) => {
    let updateRows = [...rows];
    updateRows[index][field] =
      field === "achievement_ha" ? parseFloat(value) || 0 : value;
    setRows(updateRows);
  };

  return (
    <div>
      <div className="text-2xl text-center">Practice Add Button</div>;
      <div className="flex justify-between gap-5 text-center">
        <div className="flex-1/4 border p-4 rounded">Left</div>
        <div className="flex-3/4 border border-gray-400 p-4 rounded bg-amber-50">
          <h3>Right Side</h3>
          <div>
            <div className="flex flex-col gap-2 mb-3">
              {rows.length === 0 ? (
                <p className="py-6 text-center text-[13px] text-gray-400">
                  No varieties added yet — click below to start
                </p>
              ) : (
                rows.map((varity, index) => (
                  <div
                    key={index}
                    className="grid items-center gap-2 px-3 py-2 border border-gray-200 bg-[#f9f9f9] rounded animate-slideIn"
                    style={{ gridTemplateColumns: "1fr 120px 32px" }}
                  >
                    <select
                      value={varity?.name}
                      onChange={(e) => {
                        handleChange(index, "name", e.target.value);
                      }}
                      className="w-full rounded border border-gray-200 bg-white px-2.5 py-1.5 text-[13px] text-gray-800 focus:border-blue-400 outline-none cursor-pointer"
                    >
                      <option value="">— select variety —</option>
                      {VARIETIES?.map((item) => (
                        <option
                          key={item}
                          value={item}
                          disabled={rows.some(
                            (e, i) => e.name === item && i != index,
                          )}
                        >
                          {item}
                        </option>
                      ))}
                    </select>

                    <input
                      type="number"
                      value={varity?.achievement_ha || ""}
                      onChange={(e) =>
                        handleChange(index, "achievement_ha", e.target.value)
                      }
                      placeholder="0.00"
                      className="w-full rounded border border-gray-200 bg-white px-2.5 py-1.5 text-[13px] text-gray-800 focus:border-blue-400 outline-none"
                    />

                    <button
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:border-red-300 hover:text-red-500 hover:bg-red-50 transition-all text-[13px] cursor-pointer"
                      onClick={() => {
                        handleRemoveRow(index);
                      }}
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>
            {/* Add Variety */}
            <button
              className="mt-5 flex w-full items-center justify-center rounded border border-dashed border-gray-300 bg-white px-5 py-4 text-gray-500 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
              onClick={handleAddRow}
            >
              + Add variety
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBoard;
