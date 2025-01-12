const BookCallButton = () => {
  return (
    <button
      className="
          relative
          bg-white
          text-black
          font-bold
          px-8
          py-3
          rounded-full
          hover:opacity-90
          transition-opacity
        "
    >
      <span>Book a Call</span>
      <div
        className="
          absolute
          -inset-1
          rounded-full
          border-2
          border-dashed
          border-white
          opacity-30
        "
      />
    </button>
  );
};

export default BookCallButton;
