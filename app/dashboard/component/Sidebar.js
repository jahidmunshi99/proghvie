const Sidebar = () => {
  return (
    <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-sm p-4">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Select Stage to Submit
        </h3>
      </div>

      {/* Stage 1 */}
      <div className="border rounded-lg p-4 mb-3 bg-green-50 border-green-200 flex gap-3">
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-700 font-semibold text-sm">
          1
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-gray-800">Seedbed achievement</h4>
            <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium">
              Done
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Variety-wise area (ha) after seedbed is ready
          </p>
        </div>
      </div>

      {/* Stage 2 (Active) */}
      <div className="border-2 rounded-lg p-4 mb-3 border-blue-500 bg-blue-50 flex gap-3">
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold text-sm">
          2
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-gray-800">Sowing achievement</h4>
            <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 font-medium">
              Active
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Variety-wise area (ha) after sowing is complete
          </p>
        </div>
      </div>

      {/* Stage 3 (Locked) */}
      <div className="border rounded-lg p-4 mb-3 bg-gray-50 border-gray-200 flex gap-3 opacity-70">
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 font-semibold text-sm">
          3
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-gray-500">
              Crop cutting & production
            </h4>
            <span className="text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-500 font-medium">
              Locked
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Unlocks after sowing is submitted. Variety-wise production (MT)
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-gray-100 text-gray-600 text-xs rounded-md p-3">
        ℹ Each stage locks after submission. Editing requires admin approval.
      </div>
    </div>
  );
};

export default Sidebar;
