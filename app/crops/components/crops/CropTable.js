import CropRow from "./CropRow";

export default function CropTable({
  data,
  onEdit,
  onView,
}) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b flex justify-between">
        <h2 className="text-sm font-medium">
          Crops Overview
        </h2>
        <span className="text-xs text-gray-500">
          {data.length} records
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 py-3 text-left">SL</th>
              <th className="px-4 py-3 text-left">Year</th>
              <th className="px-4 py-3 text-left">Session</th>
              <th className="px-4 py-3 text-left">Upazila</th>
              <th className="px-4 py-3 text-left">Crop</th>
              <th className="px-4 py-3 text-left">Target</th>
              <th className="px-4 py-3 text-left">Achievement</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <CropRow
                key={item.id}
                item={item}
                index={index}
                onEdit={() => onEdit(item)}
                onView={() => onView(item)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}