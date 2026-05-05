import React from 'react'

const AddUserButton = ({handleShow}) => {
  return (
    <button className="bg-black py-2 px-4 border rounded-full text-white cursor-pointer" onClick={handleShow}>
        Add New User
    </button>
  )
}

export default AddUserButton