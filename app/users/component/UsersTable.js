"use client";
import React, { useState, useEffect, Suspense } from 'react'
import { getUsers } from "../../utils/db.js"

const UsersTable = () => {
  const [users, setUsers] = useState([""])


    useEffect(() => {
      const fetchUsers = async () => {
        const users_data = await getUsers();
        setUsers(users_data)
      };
  
      fetchUsers();
    }, []);


  return (
<div class="p-6">
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow">
      
      {/* <!-- Table Head --> */}


      <thead class="bg-gray-100 text-gray-700 text-sm uppercase">
      <Suspense>
        <tr>
          <th class="px-4 py-3 text-left">User ID</th>
          <th class="px-4 py-3 text-left">Name</th>
          <th class="px-4 py-3 text-left">Email</th>
          <th class="px-4 py-3 text-left">Phone</th>
          <th class="px-4 py-3 text-left">Role</th>
          <th class="px-4 py-3 text-left">Division</th>
          <th class="px-4 py-3 text-left">District</th>
          <th class="px-4 py-3 text-left">Upazila</th>
          <th class="px-4 py-3 text-left">Created At</th>
        </tr>
            </Suspense>
      </thead>

      {/* <!-- Table Body --> */}
<tbody className="text-gray-600 text-sm">
  {users?.map((user) => (
    <tr key={user.userId} className="border-t hover:bg-gray-50">
      <td className="px-4 py-3">{user.userId}</td>
      <td className="px-4 py-3">{user.user_name}</td>
      <td className="px-4 py-3">{user.emailId}</td>
      <td className="px-4 py-3">{user.phone}</td>
      <td className="px-4 py-3 capitalize">{user.user_role}</td>
      <td className="px-4 py-3 capitalize">{user.divisionId}</td>
      <td className="px-4 py-3 capitalize">{user.districtId}</td>
      <td className="px-4 py-3 capitalize">{user.upazilaId}</td>
      <td className="px-4 py-3">
        {new Date(user.created_at).toLocaleDateString()}
      </td>
    </tr>
  ))}
</tbody>
    </table>
  </div>
</div>
  )
}

export default UsersTable