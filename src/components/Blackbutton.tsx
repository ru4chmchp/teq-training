const Blackbutton = ({ text }: { text: string }) => {
  return (
    <button
      className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300"
      type="submit"
    >
      {text}
    </button>
  );
};

export default Blackbutton;
