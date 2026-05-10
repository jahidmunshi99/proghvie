import { MdDeleteOutline } from "react-icons/md";
const DeleteButton = ({ deleteItem, itemId }) => {
  return (
    <button
      className="flex items-center gap-1 px-3 py-1.5 text-sm bg-red-50 text-red-500 rounded-lg hover:bg-red-100 cursor-pointer"
      onClick={() => {
        deleteItem(itemId);
      }}
    >
      <MdDeleteOutline />
    </button>
  );
};

export default DeleteButton;
