"use client";

import { useEffect, useState } from "react";
import {
  addUser,
  getDistrict,
  getDivision,
  getUpozila,
} from "../../utils/db.js";
import UserSubmitButton from "./buttons/UserSubmitButton.js";

const UserForm = ({ handleShow, setShow }) => {
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [upozilas, setUpozilas] = useState([]);
  const [addItem, setAddItem] = useState({
    user_role: "",
    user_name: "",
    userId: "",
    upazilaId: "",
    phone: "",
    emailId: "",
    divisionId: "",
    districtId: "",
    created_at: new Date().toISOString(),
  });

  console.log(divisions);
  useEffect(() => {
    const fetchDivision = async () => {
      const division_data = await getDivision();
      const district_data = await getDistrict();
      const upozila_data = await getUpozila();
      setDivisions(division_data);
      setDistricts(district_data);
      setUpozilas(upozila_data);
    };

    fetchDivision();
  }, []);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setAddItem({
      ...addItem,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(addItem);
    setShow(false)
    alert("You have sucessfully added your new user");
  };
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Create new user</h2>
        <form className="space-y-4">
          {/* <!-- UID --> */}
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              User ID
            </label>
            <input
              type="text"
              name="userId"
              value={addItem.userId}
              onChange={handleChange}
              placeholder="user_123"
              class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* <!-- Name --> */}
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              value={addItem.user_name}
              onChange={handleChange}
              placeholder="Jahid Munshi"
              class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {/* <!-- email --> */}
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="emailId"
                value={addItem.emailId}
                onChange={handleChange}
                placeholder="example@example.com"
                class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            {/* <!-- Phone --> */}
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                placeholder="01xxxxxxxxxx"
                class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* <!-- Role --> */}
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              name="role"
              class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="division">Division Admin</option>
              <option value="district">District Admin</option>
              <option value="upazila" selected>
                Upazila Admin
              </option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {/* <!-- Division --> */}
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Division
              </label>
              <select
                name="divisionId"
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg capitalize"
                required
              >
                <option value="">Select Division</option>
                {divisions?.map((division) => (
                  <option key={division.id} value={division.divisionId}>
                    {division.divisionId}
                  </option>
                ))}
              </select>
            </div>

            {/* <!-- District --> */}
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                District
              </label>
              <select
                name="districtId"
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg capitalize"
                required
              >
                <option value="">Select district</option>
                {districts?.map((item) => (
                  <option key={item.id} value={item.districtId}>
                    {item.districtId}
                  </option>
                ))}
              </select>
            </div>
            {/* <!-- Upazila --> */}
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Upozila
              </label>
              <select
                name="upazilaId"
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-lg capitalize"
                required
              >
                <option value="">Select Upozila</option>
                {upozilas?.map((item) => (
                  <option key={item.id} value={item.upazilaId}>
                    {item.upazilaId}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-3">
            <button
              class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={handleShow}
            >
              Cancel
            </button>
            <UserSubmitButton handleSubmit={handleSubmit}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
