const CloseButton = ({ handleClose }) => {
  return (
    <button
      onClick={handleClose}
      type="button"
      className="px-4 py-2 rounded-lg border cursor-pointer"
    >
      Cancel
    </button>
  );
};

export default CloseButton;
