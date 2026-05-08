"use client";

const AddButton = ({ label, handleShow }) => {
  return (
    <button
      type="button"
      onClick={handleShow}
      className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black relative z-50 cursor-pointer mx-2"
    >
      + Add {label}
    </button>
  );
};

export default AddButton;
