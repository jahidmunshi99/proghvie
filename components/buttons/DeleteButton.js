import { MdDeleteOutline } from "react-icons/md";
const DeleteButton = ({ deleteItem, itemId }) => {
  return (
    <button
      className="px-2 py-1 text-xl text-red-500 hover:rounded hover:bg-red-100 cursor-pointer"
      onClick={() => {
        deleteItem(itemId);
      }}
    >
      <MdDeleteOutline />
    </button>
  );
};

export default DeleteButton;
