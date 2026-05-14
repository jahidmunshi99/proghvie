import React from 'react'

const page = () => {
  return (
    <>
    <div>
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen p-8">

        <div className="max-w-7xl mx-auto">

          {/* <!-- Header --> */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Overview Dashboard</h1>
            <p className="text-gray-500 text-sm mt-1">
              Monitor your IT assets and employee assignments
            </p>
          </div>

          {/* <!-- Cards Grid --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* <!-- Total Target --> */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Total Target
                </p>
                <span className="text-blue-500 text-xl">🎯</span>
              </div>

              <h2 className="text-3xl font-bold text-blue-600 mt-4">
                1,230 <span className="text-base font-medium text-gray-500">ha</span>
              </h2>

              <p className="text-sm text-gray-500 mt-2">5 crop targets</p>
            </div>

            {/* <!-- Sowing Progress --> */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Sowing Progress
                </p>
                <span className="text-purple-500 text-xl">🌱</span>
              </div>

              <h2 className="text-3xl font-bold text-purple-600 mt-4">
                540 <span className="text-base font-medium text-gray-500">ha</span>
              </h2>

              {/* <!-- Progress Bar --> */}
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div className="bg-purple-500 h-2 rounded-full w-[44%]"></div>
              </div>

              <p className="text-sm text-red-500 mt-2 font-medium">
                44% of target
              </p>
            </div>

            {/* <!-- Production --> */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Production
                </p>
                <span className="text-green-500 text-xl">📦</span>
              </div>

              <h2 className="text-3xl font-bold text-green-600 mt-4">
                480 <span className="text-base font-medium text-gray-500">MT</span>
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                1 completed
              </p>
            </div>

            {/* <!-- Achievements --> */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Achievements
                </p>
                <span className="text-yellow-500 text-xl">🏆</span>
              </div>

              <h2 className="text-3xl font-bold text-yellow-600 mt-4">
                4
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                3 sowing, 1 harvest
              </p>
            </div>

          </div>

        </div>

      </div>
  </div>
  <div>
    <div class="bg-gray-100 p-6">

      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">

        {/* <!-- Total Target --> */}
        <div class="bg-white rounded-xl shadow-sm border broder-gray-50 p-6">
          <p class="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Total Target
          </p>
          <h2 class="text-3xl font-bold text-cyan-500 mt-2">
            1,230 <span class="text-lg font-medium">ha</span>
          </h2>
          <p class="text-sm text-gray-500 mt-1">5 crop targets</p>
        </div>

        {/* <!-- Sowing Progress --> */}
        <div class="bg-white rounded-xl shadow-sm border  p-6">
          <p class="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Sowing Progress
          </p>
          <h2 class="text-3xl font-bold text-purple-500 mt-2">
            540 <span class="text-lg font-medium">ha</span>
          </h2>
          <p class="text-sm text-red-500 mt-1">44% of target</p>
        </div>

        {/* <!-- Production --> */}
        <div class="bg-white rounded-xl shadow-sm border p-6">
          <p class="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Production
          </p>
          <h2 class="text-3xl font-bold text-green-500 mt-2">
            480 <span class="text-lg font-medium">MT</span>
          </h2>
          <p class="text-sm text-gray-500 mt-1">1 completed</p>
        </div>

        {/* <!-- Achievements --> */}
        <div class="bg-white rounded-xl shadow-sm border p-6">
          <p class="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Achievements
          </p>
          <h2 class="text-3xl font-bold text-yellow-500 mt-2">
            4
          </h2>
          <p class="text-sm text-gray-500 mt-1">
            3 sowing, 1 harvest
          </p>
        </div>

      </div>

    </div>
  </div>
  <div>
    <div class="bg-slate-50 min-h-screen p-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* <!-- Left Large Card --> */}
        <div class="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-8">
          
          <h2 class="text-lg font-semibold text-gray-800 mb-6">
            Recent Asset Assignments
          </h2>

          <div class="flex items-center justify-center h-64 text-center">
            <p class="text-gray-400 italic">
              No recent assignments found
            </p>
          </div>

        </div>

        {/* <!-- Right Side --> */}
        <div class="flex flex-col gap-6">

          {/* <!-- System Status --> */}
          <div class="bg-white rounded-2xl shadow-sm border p-6">
            <h3 class="font-semibold text-gray-800 mb-4">
              Category by Progress
            </h3>

            <div class="space-y-4 text-sm">

              <div class="flex justify-between items-center">
                <span class="text-gray-600">Seedbed</span>
                <span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                  ✓ Good
                </span>
              </div>

              <div class="flex justify-between items-center">
                <span class="text-gray-600">License Status</span>
                <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                  0 Active
                </span>
              </div>

              <div class="flex justify-between items-center">
                <span class="text-gray-600">Employee Coverage</span>
                <span class="font-semibold text-gray-800">
                  100%
                </span>
              </div>

            </div>
          </div>

          {/* <!-- Available Resources --> */}
          <div class="bg-white rounded-2xl shadow-sm border p-6">
            <h3 class="font-semibold text-gray-800 mb-4">
              Target by Category
            </h3>

            <div class="space-y-4 text-sm">

              <div class="flex justify-between">
                <span class="text-gray-600">Rice</span>
                <span class="text-blue-600 font-semibold">500 hec</span>
              </div>

              <div class="flex justify-between">
                <span class="text-gray-600">Pulse</span>
                <span class="text-blue-600 font-semibold">155 hec</span>
              </div>

              <div class="flex justify-between">
                <span class="text-gray-600">Vegitable</span>
                <span class="text-red-500 font-semibold">100 hec</span>
              </div>

            </div>
          </div>

          {/* <!-- Info Box --> */}
          <div class="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <div class="flex gap-3">
              <div class="text-yellow-500 text-xl">💡</div>
              <div>
                <h4 class="font-semibold text-blue-700 mb-1">
                  Review Data Accuracy
                </h4>
                <p class="text-sm text-blue-600 leading-relaxed">
                  Please verify employee details, license expiry dates,
                  and asset conditions regularly to ensure all information
                  is current and accurate.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
    
    {/* Table */}

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="text-base font-semibold text-gray-800">
          Crops Overview
        </h2>
        <span className="text-sm text-gray-500">
          10 records
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
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4 font-medium text-gray-700">
                  2025-26
                </td>

                {/* Session Badge */}
                <td className="px-6 py-4">
                  <span
                    className="px-2 py-1 text-xs font-medium rounded-md bg-green-100 text-green-700"
                  >
                    Robi
                  </span>
                </td>

                <td className="px-6 py-4">Patuakhali Sadar</td>
                <td className="px-6 py-4 font-medium text-gray-800">
                  Boro
                </td>
                <td className="px-6 py-4">4500</td>

                {/* Achievement */}
                <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-600 rounded-md">
                      Pending
                    </span>

                    <span>
                      <span
                        className="text-green-600"
                      >
                        90%
                      </span>
                    </span>
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
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </>
  )
}

export default page