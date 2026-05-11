export default function CropsTable() {
  const data = [
    {
      id: 1,
      year: "2025-26",
      session: "robi",
      upazila: "Savar",
      crop: "Wheat",
      target: "1,500 ha",
      achievement: "90 ha",
      percent: "6%",
      status: "low",
    },
    {
      id: 2,
      year: "2025-26",
      session: "robi",
      upazila: "Dhamrai",
      crop: "Mustard",
      target: "900 ha",
      achievement: "820 ha",
      percent: "91%",
      status: "high",
    },
    {
      id: 3,
      year: "2024-25",
      session: "kharif",
      upazila: "Keraniganj",
      crop: "Paddy",
      target: "3,200 ha",
      achievement: "Pending",
      percent: "",
      status: "pending",
    },
    {
      id: 4,
      year: "2025-26",
      session: "kharif",
      upazila: "Nawabganj",
      crop: "Jute",
      target: "680 ha",
      achievement: "Pending",
      percent: "",
      status: "pending",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="text-base font-semibold text-gray-800">
          Crops Overview
        </h2>
        <span className="text-sm text-gray-500">
          {data.length} records
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500 border-t border-b border-gray-200">
            <tr>
              <th className="px-6 py-3">SL</th>
              <th className="px-6 py-3">Fin. Year</th>
              <th className="px-6 py-3">Session</th>
              <th className="px-6 py-3">Upazila</th>
              <th className="px-6 py-3">Crop Name</th>
              <th className="px-6 py-3">Target</th>
              <th className="px-6 py-3">Achievement</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {data.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-medium text-gray-700">
                  {item.year}
                </td>

                {/* Session Badge */}
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-md ${
                      item.session === "robi"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {item.session}
                  </span>
                </td>

                <td className="px-6 py-4">{item.upazila}</td>
                <td className="px-6 py-4 font-medium text-gray-800">
                  {item.crop}
                </td>
                <td className="px-6 py-4">{item.target}</td>

                {/* Achievement */}
                <td className="px-6 py-4">
                  {item.status === "pending" ? (
                    <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-600 rounded-md">
                      Pending
                    </span>
                  ) : (
                    <span>
                      {item.achievement}{" "}
                      <span
                        className={
                          item.status === "high"
                            ? "text-green-600"
                            : "text-red-500"
                        }
                      >
                        ({item.percent})
                      </span>
                    </span>
                  )}
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button className="px-2 py-1 border rounded-lg hover:bg-gray-100">
                      👁
                    </button>
                    <button className="px-2 py-1 border rounded-lg hover:bg-gray-100">
                      ✏
                    </button>
                    <button className="px-2 py-1 border rounded-lg hover:bg-gray-100 text-red-500">
                      🗑
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}