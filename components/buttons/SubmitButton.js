const SubmitButton = ({ handleSubmit}) => {
  return (
    <button
      type="submit"
      className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
      onClick={handleSubmit}
    >
      Submit
    </button>
  );
};

export default SubmitButton;
