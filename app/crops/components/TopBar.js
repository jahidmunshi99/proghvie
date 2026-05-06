import React from "react";

const TopBar = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4">
      
      {/* Wrapper */}
      <div className="flex flex-col lg:flex-row gap-4">

        {/* Location Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 flex-1">
          
          {/* Division */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Division
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 capitalize">
              <option value="">All Divisions</option>
              <option value="dhaka">Dhaka</option>
              <option value="chattogram">Chattogram</option>
            </select>
          </div>

          {/* District */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              District
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 capitalize">
              <option value="">All Districts</option>
              <option value="gazipur">Gazipur</option>
            </select>
          </div>

          {/* Upazila */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upazila
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 capitalize">
              <option value="">All Upazilas</option>
              <option value="kaliganj">Kaliganj</option>
            </select>
          </div>
        </div>

        {/* Time Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:w-[300px]">
          
          {/* Financial Year */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Financial Year
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
              <option value="">All Years</option>
              <option value="2024-2025">2024 - 2025</option>
              <option value="2025-2026">2025 - 2026</option>
            </select>
          </div>

          {/* Session */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Session
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
              <option value="">All Sessions</option>
              <option value="kharif">Kharif</option>
              <option value="rabi">Rabi</option>
            </select>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopBar;