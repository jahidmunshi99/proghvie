"use client";

const AddButton = () => {
  const handleAddButton = () => {
    alert("clicked from Add Button");
    console.log("clicked");
  };

  return (
    <button
      type="button"
      onClick={handleAddButton}
      className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 relative z-50 cursor-pointer"
    >
      + Add Data
    </button>
  );
};

export default AddButton;
