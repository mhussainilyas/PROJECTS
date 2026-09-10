import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDeletePopup } from "../store/slices/popup.slice";
import { deleteEmployee } from "../store/thunks/employee.thunk";

function DeletePopup() {
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.popup.deletePopup);

  function handleDeleteEmployee() {
    dispatch(deleteEmployee(popup));
    dispatch(closeDeletePopup());
  }

  if (!popup) return null;

  return (
    <div
      onClick={() => dispatch(closeDeletePopup())}
      className="w-full h-screen fixed top-0 left-0 z-10 bg-black/50 backdrop-blur flex items-center justify-center max-sm:px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="card bg-neutral text-neutral-content w-full sm:w-96"
      >
        <div className="card-body items-center text-center py-10 px-12">
          <h2 className="card-title text-2xl font-bold">Delete</h2>
          <p className="text-white/40">Do you want to delete this employee?</p>
          <div className="card-actions flex gap-3 mt-3">
            <button
              className="btn btn-error"
              onClick={() => dispatch(closeDeletePopup())}
            >
              No
            </button>
            <button className="btn btn-success" onClick={handleDeleteEmployee}>
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletePopup;
