const Model = ({ modelOpen, setModelOpen, children }) => {
  return (
    <dialog
      id="my_modal_3"
      className={`modal ${modelOpen ? "modal-open" : ""}`}
    >
      <div className="modal-box relative ">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={() => {
              setModelOpen(false);
            }}
            className="text-black hover:text-white hover:bg-red-700 btn-sm  absolute transition-all duration-500 right-2 top-2 rounded-xl"
          >
            ✕
          </button>
        </form>
        {children}
      </div>
    </dialog>
  );
};

export default Model;
