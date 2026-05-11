"use client";

import { useState } from "react";

export default function BlogBoard() {
  const [activeTab, setActiveTab] = useState("admin");

  return (
    <div className="p-4 text-gray-800">

      {/* Tabs */}
      <div className="flex gap-2 border-b pb-3 mb-4">
        <button
          onClick={() => setActiveTab("admin")}
          className={`px-3 py-1 text-sm rounded ${
            activeTab === "admin"
              ? "bg-gray-100 font-medium"
              : "text-gray-500"
          }`}
        >
          🔑 Admin panel
        </button>

        <button
          onClick={() => setActiveTab("upazila")}
          className={`px-3 py-1 text-sm rounded ${
            activeTab === "upazila"
              ? "bg-gray-100 font-medium"
              : "text-gray-500"
          }`}
        >
          🌾 Upazila entry
        </button>

        <button
          onClick={() => setActiveTab("report")}
          className={`px-3 py-1 text-sm rounded ${
            activeTab === "report"
              ? "bg-gray-100 font-medium"
              : "text-gray-500"
          }`}
        >
          📊 Session report
        </button>
      </div>

      {/* ================= ADMIN ================= */}
      {activeTab === "admin" && (
        <div className="grid md:grid-cols-2 gap-4">

          <div className="border rounded-lg bg-white">
            <div className="p-3 border-b flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
              <h2 className="text-sm font-medium">Set crop target</h2>
              <span className="ml-auto text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                Admin only
              </span>
            </div>

            <div className="p-4 space-y-3 text-sm">
              <select className="w-full border rounded p-2">
                <option>2025-26</option>
              </select>

              <div className="grid grid-cols-2 gap-2">
                <select className="border rounded p-2">
                  <option>Robi</option>
                </select>
                <select className="border rounded p-2">
                  <option>Savar</option>
                </select>
              </div>

              <input
                type="number"
                placeholder="Target (hectare)"
                className="w-full border rounded p-2"
              />

              <button className="w-full bg-blue-600 text-white py-2 rounded">
                Save target
              </button>
            </div>
          </div>

          <div className="border rounded-lg bg-white p-4">
            <h3 className="text-xs uppercase tracking-wide text-gray-500 mb-3">
              Overview
            </h3>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="border rounded p-3">
                <div className="text-lg font-medium text-blue-600">12</div>
                <div className="text-xs text-gray-500">Upazilas</div>
              </div>

              <div className="border rounded p-3">
                <div className="text-lg font-medium text-blue-600">5</div>
                <div className="text-xs text-gray-500">Crops</div>
              </div>

              <div className="border rounded p-3">
                <div className="text-lg font-medium text-blue-600">
                  8,400
                </div>
                <div className="text-xs text-gray-500">Total ha</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= UPAZILA ================= */}
      {activeTab === "upazila" && (
        <div className="grid md:grid-cols-2 gap-4">

          <div className="border rounded-lg p-4 bg-white">
            <h2 className="text-sm font-medium mb-3">
              Stage selection
            </h2>

            <div className="space-y-3 text-sm">
              <div className="border rounded p-3">
                <div className="flex items-center mb-1">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-700 text-xs mr-2">
                    1
                  </span>
                  Seedbed achievement
                </div>
                <p className="text-xs text-gray-500">
                  Variety-wise area after seedbed
                </p>
              </div>

              <div className="border-2 border-blue-600 bg-blue-50 rounded p-3">
                <div className="flex items-center mb-1">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs mr-2">
                    2
                  </span>
                  Sowing achievement
                </div>
                <p className="text-xs text-gray-500">
                  Variety-wise area after sowing
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-white">
            <h2 className="text-sm font-medium mb-3">
              Stage 2 — Sowing Entry
            </h2>

            <input
              type="number"
              placeholder="Achievement (ha)"
              className="w-full border rounded p-2 mb-3"
            />

            <button className="w-full bg-green-700 text-white py-2 rounded">
              Submit & Lock
            </button>
          </div>
        </div>
      )}

      {/* ================= REPORT ================= */}
      {activeTab === "report" && (
        <div className="border rounded-lg bg-white p-4">
          <h2 className="text-sm font-medium mb-4">
            Session Report
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div className="border rounded p-3 text-center">
              <div className="text-lg font-medium">12</div>
              <div className="text-xs text-gray-500">Upazilas</div>
            </div>

            <div className="border rounded p-3 text-center">
              <div className="text-lg font-medium">9,840</div>
              <div className="text-xs text-gray-500">Sowing ha</div>
            </div>

            <div className="border rounded p-3 text-center">
              <div className="text-lg font-medium">6,200</div>
              <div className="text-xs text-gray-500">Cutting ha</div>
            </div>

            <div className="border rounded p-3 text-center">
              <div className="text-lg font-medium">28,450</div>
              <div className="text-xs text-gray-500">Production MT</div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border">
              <thead className="bg-gray-100 text-xs uppercase">
                <tr>
                  <th className="p-2 text-left">Upazila</th>
                  <th className="p-2 text-left">Crop</th>
                  <th className="p-2 text-left">Target</th>
                  <th className="p-2 text-left">Seedbed</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-2">Savar</td>
                  <td className="p-2">Wheat</td>
                  <td className="p-2">1500</td>
                  <td className="p-2 text-green-600">1420</td>
                  <td className="p-2">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs">
                      Partial
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}