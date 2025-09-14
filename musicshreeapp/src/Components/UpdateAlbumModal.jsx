function UpdateAlbumModal({ show, handleClose, children }) {
    return (
      <div
        className={`fixed inset-0 flex items-center justify-center bg-red-600 bg-opacity-50 ${
          show ? "block" : "hidden"
        }`}
        onClick={handleClose}
      >
        <div
          className="flex flex-row gap-5 items-center bg-black rounded-lg shadow-lg p-6 max-w-lg w-full"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            className="absolute top-2 right-2 text-white hover:text-black"
            onClick={handleClose}
          >
            CLOSE
          </button>
          {children}
        </div>
      </div>
    );
  }
  
  export default UpdateAlbumModal;