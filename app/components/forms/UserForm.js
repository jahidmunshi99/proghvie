import React from 'react'

const UserForm = () => {
  return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Create new user</h2>
        <form className="space-y-4">

        {/* <!-- UID --> */}
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">User ID</label>
            <input 
            type="text" 
            name="uid" 
            placeholder="user_123"
            class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
        </div>

        {/* <!-- Name --> */}
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input 
            type="text" 
            name="name" 
            placeholder="Jahid Munshi"
            class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
        </div>
        <div className='grid grid-cols-2 gap-3'>
            {/* <!-- email --> */}
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                type="email" 
                name="email" 
                placeholder="example@example.com"
                class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>
            {/* <!-- Phone --> */}
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
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
            <label class="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select 
            name="role"
            class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
            <option value="division">Division</option>
            <option value="district">District</option>
            <option value="upazila" selected>Upazila</option>
            </select>
        </div>

        {/* <!-- Division --> */}
        <div className='grid grid-cols-3 gap-3'>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Division</label>
                <input 
                type="text" 
                name="divisionId" 
                placeholder="dhaka"
                class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            {/* <!-- District --> */}
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">District</label>
                <input 
                type="text" 
                name="districtId" 
                placeholder="gazipur"
                class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            {/* <!-- Upazila --> */}
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Upazila</label>
                <input 
                type="text" 
                name="upazilaId" 
                placeholder="kaliganj"
                class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>
        </div>

        {/* Buttons */}
          <div className="flex justify-end gap-3 pt-3">
                    <button 
            type="submit" 
            class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >Cancel</button>
                <button 
            type="submit" 
            class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >Submit</button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default UserForm