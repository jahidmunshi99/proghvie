// const EditAchievementModal = () => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 backdrop-blur-[2px]">
//       <div className="flex max-h-[85vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
//         {/* Header */}
//         <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 sm:px-6">
//           <h2 className="text-xl font-semibold text-gray-900">
//             Edit achievement — Wheat
//           </h2>

//           <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 transition-all duration-300 hover:border-red-300 hover:bg-red-50 hover:text-red-600">
//             ✕
//           </button>
//         </div>

//         {/* Body */}
//         <div className="flex flex-1 flex-col overflow-hidden lg:flex-row">
//           {/* Left Sidebar */}
//           <div className="w-full overflow-y-auto border-b border-gray-200 bg-gray-50 p-5 lg:w-[320px] lg:border-b-0 lg:border-r">
//             <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">
//               Record Details
//             </h3>

//             <div className="space-y-5">
//               <DetailItem label="Financial year" value="2025-26" />
//               <DetailItem label="Session" value="robi" />
//               <DetailItem label="Upazila" value="Savar" />
//               <DetailItem label="Crop name" value="Wheat" />
//               <DetailItem label="Category" value="seedbed" />
//               <DetailItem label="Target" value="1,500 ha" />
//             </div>

//             {/* Progress Card */}
//             <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
//               <div className="mb-2 flex items-center justify-between">
//                 <span className="text-sm font-medium text-gray-600">
//                   Achievement
//                 </span>

//                 <span className="text-sm font-semibold text-orange-500">
//                   0%
//                 </span>
//               </div>

//               <div className="h-3 overflow-hidden rounded-full bg-gray-200">
//                 <div className="h-full w-0 rounded-full bg-orange-500"></div>
//               </div>

//               <p className="mt-3 text-sm text-gray-500">0 / 1,500 ha</p>
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="flex flex-1 flex-col overflow-hidden bg-white">
//             <div className="flex-1 overflow-y-auto p-5 sm:p-6">
//               <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
//                 <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">
//                   Variety-wise Achievement
//                 </h3>

//                 <div className="hidden grid-cols-2 gap-8 text-sm font-medium text-gray-400 sm:grid">
//                   <span>Variety name</span>
//                   <span>Achievement (ha)</span>
//                 </div>
//               </div>

//               {/* Empty State */}
//               <div className="flex min-h-[160px] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-4 text-center">
//                 <p className="text-gray-400">No varieties added yet</p>
//               </div>

//               {/* Add Variety */}
//               <button className="mt-5 flex w-full items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-4 text-gray-500 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600">
//                 + Add variety
//               </button>

//               {/* Total Achievement */}
//               <div className="mt-5 flex items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 px-5 py-5">
//                 <span className="text-lg font-medium text-gray-600">
//                   Total achievement
//                 </span>

//                 <span className="text-2xl font-bold text-orange-500">0 ha</span>
//               </div>
//             </div>

//             {/* Footer */}
//             <div className="flex flex-col gap-3 border-t border-gray-200 bg-gray-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-end sm:px-6">
//               <button className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-all duration-300 hover:bg-gray-100">
//                 Cancel
//               </button>

//               <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-md">
//                 Save to database
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const DetailItem = ({ label, value }) => {
//   return (
//     <div>
//       <p className="mb-1 text-sm text-gray-400">{label}</p>

//       <h4 className="text-xl font-semibold text-gray-800">{value}</h4>
//     </div>
//   );
// };

// export default EditAchievementModal;

// const getVarieties = (cropName) => {
//   const varieties = {
//     Wheat: ["BARI Gom 33", "BARI Gom 34", "Prodip"],
//     Rice: ["BRRI dhan28", "BRRI dhan29"],
//     Mustard: ["BARI Sarisha 14", "BARI Sarisha 17"],
//   };

//   return varieties[cropName] || [];
// };

// function EditAchivementModal({
//   row = {},
//   index,
//   cropName,
//   usedNames = [],
//   onChange,
//   onRemove,
// }) {
//   const allVarieties = getVarieties(cropName);
//   console.log(allVarieties);

//   return (
//     <div className="grid grid-cols-1 gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:grid-cols-[1fr_140px_44px] sm:items-center">
//       {/* Variety Select */}
//       <div>
//         <select
//           value={row.name || ""}
//           onChange={(e) => onChange(index, "name", e.target.value)}
//           className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500"
//         >
//           <option value="">— Select variety —</option>

//           {allVarieties.map((v) => (
//             <option
//               key={v}
//               value={v}
//               disabled={usedNames.includes(v) && v !== row.name}
//             >
//               {v}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Achievement */}
//       <input
//         type="number"
//         value={row.achievement || ""}
//         onChange={(e) =>
//           onChange(index, "achievement", parseFloat(e.target.value) || 0)
//         }
//         className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500"
//       />

//       {/* Remove Button */}
//       <button
//         onClick={() => onRemove(index)}
//         className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-300 text-gray-400 transition-all duration-200 hover:border-red-300 hover:bg-red-50 hover:text-red-600"
//       >
//         ✕
//       </button>
//     </div>
//   );
// }

// export default EditAchivementModal;

import { useMemo, useState } from "react";

const TARGET_HA = 1500;
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

const EditAchivementModal = () => {
  // Initial state with sample data
  const [rows, setRows] = useState([
    { name: "BARI Gom-25", achievement_ha: 640 },
    { name: "BARI Gom-28", achievement_ha: 380 },
  ]);
  const [isSaving, setIsSaving] = useState(false);

  // Memoized calculations for performance
  const totalAchievement = useMemo(() => {
    return rows.reduce(
      (sum, row) => sum + (parseFloat(row.achievement_ha) || 0),
      0,
    );
  }, [rows]);

  const percentage = useMemo(() => {
    return TARGET_HA ? Math.round((totalAchievement / TARGET_HA) * 100) : 0;
  }, [totalAchievement]);

  // UI Helper functions
  const getColors = (pct) => {
    if (pct >= 100) return { bar: "bg-emerald-600", text: "text-emerald-800" };
    if (pct >= 60) return { bar: "bg-amber-600", text: "text-amber-800" };
    return { bar: "bg-[#D85A30]", text: "text-[#c2410c]" };
  };

  const colors = getColors(percentage);

  // Row Handlers
  const addRow = () => {
    const usedNames = rows.map((r) => r.name);
    const nextAvailable = VARIETIES.find((v) => !usedNames.includes(v)) || "";
    setRows([...rows, { name: nextAvailable, achievement_ha: 0 }]);
  };

  const removeRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const updateRow = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] =
      field === "achievement_ha" ? parseFloat(value) || 0 : value;
    setRows(updatedRows);
  };

  const handleSave = async () => {
    if (rows.length === 0 || rows.some((r) => !r.name)) return;

    setIsSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSaving(false);
    console.log("Saved Data:", rows);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 font-sans bg-gray-200">
      <div className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-xl">
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
          <div>
            <h2 className="text-[15px] font-semibold text-gray-900">
              Achievement entry — Wheat
            </h2>
            <p className="mt-0.5 text-[12px] text-gray-400">
              2025-26 · Robi · Savar · Seedbed
            </p>
          </div>
          <button className="flex items-center justify-center w-8 h-8 text-base text-gray-400 transition-colors border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            ✕
          </button>
        </div>

        {/* BODY */}
        <div
          className="grid flex-1 min-h-0 overflow-hidden"
          style={{ gridTemplateColumns: "240px 1fr" }}
        >
          {/* LEFT PANEL */}
          <div className="p-5 overflow-y-auto border-r border-gray-100 bg-[#f9f9f9]">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
              Record details
            </p>

            {[
              { label: "Financial year", value: "2025-26" },
              { label: "Session", value: "Robi", badge: true },
              { label: "Upazila", value: "Savar" },
              { label: "Crop", value: "Wheat" },
              { label: "Category", value: "Seedbed" },
              { label: "Target", value: "1,500 ha" },
            ].map((detail, idx) => (
              <div key={idx} className="mb-4 ">
                <div className="text-[10px] uppercase tracking-wide text-gray-400">
                  {detail.label}
                </div>
                <div className="mt-0.5 text-[13px] font-medium text-gray-800">
                  {detail.badge ? (
                    <span className="inline-block rounded bg-teal-50 px-2 py-0.5 text-[11px] font-medium text-teal-800">
                      {detail.value}
                    </span>
                  ) : (
                    detail.value
                  )}
                </div>
              </div>
            ))}

            {/* Progress Card */}
            <div className="p-3 mt-2 bg-white border border-gray-200 rounded-xl">
              <div className="mb-1.5 flex justify-between text-[11px]">
                <span className="text-gray-500">Achievement vs target</span>
                <span className={`font-semibold ${colors.text}`}>
                  {percentage}%
                </span>
              </div>
              <div className="h-2 overflow-hidden bg-[#F9F9F9] rounded">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${colors.bar}`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                ></div>
              </div>
              <div className="mt-1 text-[11px] text-gray-400">
                {totalAchievement.toLocaleString()} /{" "}
                {TARGET_HA.toLocaleString()} ha
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="p-5 overflow-y-auto">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-widest text-gray-400">
              Variety-wise achievement
            </p>

            <div
              className="mb-2 grid gap-2 px-3 text-[10px] uppercase tracking-wider text-gray-300"
              style={{ gridTemplateColumns: "1fr 120px 32px" }}
            >
              <span>Variety</span>
              <span>Achievement (ha)</span>
              <span></span>
            </div>

            <div className="flex flex-col gap-2 mb-3">
              {rows.length === 0 ? (
                <p className="py-6 text-center text-[13px] text-gray-300">
                  No varieties added yet — click below to start
                </p>
              ) : (
                rows.map((row, i) => (
                  <div
                    key={i}
                    className="grid items-center gap-2 px-3 py-2 border border-gray-200 bg-[#f9f9f9] rounded animate-slideIn"
                    style={{ gridTemplateColumns: "1fr 120px 32px" }}
                  >
                    <select
                      value={row.name}
                      onChange={(e) => updateRow(i, "name", e.target.value)}
                      className="w-full rounded border border-gray-200 bg-white px-2.5 py-1.5 text-[13px] text-gray-800 focus:border-blue-400 outline-none cursor-pointer"
                    >
                      <option value="">— select variety —</option>
                      {VARIETIES.map((v) => (
                        <option
                          key={v}
                          value={v}
                          disabled={rows.some(
                            (r, idx) => r.name === v && idx !== i,
                          )}
                        >
                          {v}
                        </option>
                      ))}
                    </select>

                    <input
                      type="number"
                      value={row.achievement_ha || ""}
                      onChange={(e) =>
                        updateRow(i, "achievement_ha", e.target.value)
                      }
                      placeholder="0.00"
                      className="w-full rounded border border-gray-200 bg-white px-2.5 py-1.5 text-[13px] text-gray-800 focus:border-blue-400 outline-none"
                    />

                    <button
                      onClick={() => removeRow(i)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:border-red-300 hover:text-red-500 hover:bg-red-50 transition-all text-[13px] cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>

            <button
              onClick={addRow}
              className="flex w-full items-center gap-1.5 rounded border border-dashed border-gray-200 px-3 py-2 text-[13px] text-gray-400 hover:border-blue-300 hover:text-blue-600 transition-all cursor-pointer"
            >
              + Add variety
            </button>

            <div className="flex items-center justify-between px-4 py-3 mt-4 border border-gray-200 bg-[#f9f9f9] rounded">
              <span className="text-[13px] text-gray-500">
                Total achievement
              </span>
              <span className={`text-[16px] font-semibold ${colors.text}`}>
                {totalAchievement.toLocaleString()} ha
              </span>
            </div>

            {totalAchievement > TARGET_HA && (
              <p className="mt-2 text-[12px] text-amber-600">
                ⚠ Exceeds target by {(totalAchievement - TARGET_HA).toFixed(1)}{" "}
                ha
              </p>
            )}
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 shrink-0">
          <p className="text-[11px] text-gray-300">
            * All area values in hectares (ha)
          </p>
          <div className="flex gap-2">
            <button className="rounded border border-gray-200 bg-gray-700 px-4 text-white py-2 text-[13px] hover:bg-gray-950 transition-colors cursor-pointer">
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving || rows.length === 0}
              className="rounded border border-gray-700 bg-green-700 px-5 py-2 text-[13px] font-medium text-white hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSaving ? "Saving..." : "Save achievement"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAchivementModal;
