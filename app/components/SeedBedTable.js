"use client";

const data = [
  {
    id: 1,
    year: "2024-25",
    session: "Rabi",
    upozila: "Kaliganj",
    crop: "Rice",
    land: "120 Acres",
    seedbed: "15 Acres",
    cultivation: "110 Acres",
    production: "300 Tons",
  },
  {
    id: 2,
    year: "2024-25",
    session: "Kharif",
    upozila: "Gazipur Sadar",
    crop: "Wheat",
    land: "80 Acres",
    seedbed: "10 Acres",
    cultivation: "70 Acres",
    production: "200 Tons",
  },
];

const SeedBedTable = () => {
  const handleAddButton = () => {
    alert("clicked from Add Button");
    console.log("clicked");
  };
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm overflow-x-auto">
      {/* Header */}
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Seed Bed Data</h2>
        {/* <AddButton /> */}
        <button
          type="button"
          onClick={handleAddButton}
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
              <td className="px-4 py-3">{item.year}</td>
              <td className="px-4 py-3">{item.session}</td>
              <td className="px-4 py-3">{item.upozila}</td>
              <td className="px-4 py-3">{item.crop}</td>
              <td className="px-4 py-3">{item.land}</td>

              {/* New Columns */}
              <td className="px-4 py-3">{item.seedbed}</td>
              {/* Actions */}
              <td className="px-4 py-3">
                <div className="flex items-center justify-center gap-3">
                  <button className="flex items-center gap-1 px-3 py-1.5 text-sm bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100">
                    Edit
                  </button>

                  <button className="flex items-center gap-1 px-3 py-1.5 text-sm bg-red-50 text-red-500 rounded-lg hover:bg-red-100">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SeedBedTable;
