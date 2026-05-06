const UserSubmitButton = ({ handleSubmit }) => {
  return (
    <button
      class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      onClick={handleSubmit}
    >
      Submit
    </button>
  );
};

export default UserSubmitButton;
