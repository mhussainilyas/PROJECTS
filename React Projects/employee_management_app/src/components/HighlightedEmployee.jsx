import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../utilities/Button";
import { closeDrawer } from "../store/slices/drawer.slice";

function HighlightedEmployee() {
  const employeeData = useSelector((state) => state.employee.employee);
  const isDrawerActive = useSelector((state) => state.drawer.isActive);
  const dispatch = useDispatch();

  return (
    <div
      className={`w-75 h-screen z-5 absolute top-0 right-0 bg-base-300 py-10 px-5 ${isDrawerActive ? "translate-x-0" : "translate-x-full"} transition-all duration-200`}
    >
      <h2 className="text-xl font-bold text-center border-b border-base-100 pb-4 mb-4">
        Highlighted Employees
      </h2>
      <div className="flex flex-col gap-3">
        {employeeData.map((emp) => {
          if (emp.highlighted) {
            return (
              <div key={emp.id} className="bg-base-200 p-4 rounded-lg">
                <h4 className="font-bold">{emp.name}</h4>
                <p className="text-sm mt-1 text-base-content/50">{emp.email}</p>
              </div>
            );
          }
        })}
      </div>
      <button
        onClick={() => dispatch(closeDrawer())}
        className="btn btn-error absolute bottom-5 right-5"
      >
        Close
      </button>
    </div>
  );
}

export default HighlightedEmployee;
