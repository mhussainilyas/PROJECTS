import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEmployeePopup } from "../store/slices/popup.slice";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../store/thunks/employee.thunk";

function EmployeePopup() {
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.popup.employeePopup);
  const [formData, setFormData] = useState({
    profileURL: "",
    name: "",
    email: "",
    bio: "",
    highlighted: false,
  });

  function handleFormData(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function handleCreateUser() {
    if (popup.id) {
      await dispatch(updateEmployee({ id: popup.id, details: formData }));
    } else {
      await dispatch(createEmployee(formData));
    }

    dispatch(closeEmployeePopup());
  }

  useEffect(() => {
    if (!popup) {
      setFormData({
        profileURL: "",
        name: "",
        email: "",
        bio: "",
        highlighted: false,
      });
    } else if (popup.id) {
      setFormData({
        profileURL: popup.profileURL,
        name: popup.name,
        email: popup.email,
        bio: popup.bio,
        highlighted: popup.highlighted,
      });
    }
    console.log(popup);
  }, [popup]);

  if (!popup) return null;

  return (
    <div
      onClick={() => dispatch(closeEmployeePopup())}
      className="w-full h-screen fixed top-0 left-0 z-10 bg-black/50 backdrop-blur flex items-center justify-center max-sm:px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-base-200 border-base-300 rounded-box w-md border p-6"
      >
        <h2 className="text-xl font-semibold text-center mb-4 pb-4 border-b border-white/10">
          Employee Details
        </h2>
        <div className="flex flex-col gap-1">
          <label className="label">Profile URL</label>
          <input
            type="text"
            name="profileURL"
            className="input w-full focus:outline-none"
            placeholder="Enter profile url"
            value={formData.profileURL}
            onChange={handleFormData}
          />
        </div>

        <div className="flex flex-col gap-1 my-2">
          <label className="label">Employee Name</label>
          <input
            type="text"
            name="name"
            className="input w-full focus:outline-none"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleFormData}
          />
        </div>

        <div className="flex flex-col gap-1 my-2">
          <label className="label">Employee Email</label>
          <input
            type="email"
            name="email"
            className="input w-full focus:outline-none"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleFormData}
          />
        </div>

        <div className="flex flex-col gap-1 my-2">
          <label className="label">Employee Bio</label>
          <textarea
            name="bio"
            className="textarea h-24 w-full"
            placeholder="Enter bio detail"
            value={formData.bio}
            onChange={handleFormData}
          ></textarea>
        </div>

        <button
          onClick={handleCreateUser}
          className="btn btn-neutral py-5 w-full mt-3"
        >
          {popup.id ? "Update User" : "Create User"}
        </button>
      </div>
    </div>
  );
}

export default EmployeePopup;
