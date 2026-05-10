import { FaRegEdit } from "react-icons/fa";
const EditButton = ({ editItem, itemId }) => {
  return (
    <button
      className="px-2 py-1.5 text-lg text-indigo-600 rounded-lg hover:bg-indigo-100 cursor-pointer"
      onClick={() => {
        editItem(itemId);
      }}
    >
      <FaRegEdit />
    </button>
  );
};

export default EditButton;
