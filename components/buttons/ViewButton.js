import { FaEye } from "react-icons/fa";
const ViewButton = ({ ViewItem, itemId }) => {
  return (
    <button
      className="px-2 py-1 text-lg text-blue-500 hover:rounded hover:bg-blue-100 cursor-pointer"
      onClick={() => {
        ViewItem(itemId);
      }}
    >
      <FaEye />
    </button>
  );
};

export default ViewButton;
