import React, { useEffect } from "react";
import Employee from "./Employee";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "../store/thunks/employee.thunk";
import Loader from "../utilities/Loader";

function EmployeesList() {
  const employeeData = useSelector((state) => state.employee.employee);
  const isLoading = useSelector((state) => state.employee.loading);

  if (isLoading) return <Loader />;

  return (
    <ul className="list px-4 sm:px-2 py-14 flex flex-col gap-5">
      {employeeData.length === 0 && (
        <p className="text-center text-lg text-base-content/50">
          No any employee found!
        </p>
      )}

      {employeeData.map((emp) => (
        <Employee key={emp.id} details={emp} />
      ))}
    </ul>
  );
}

export default EmployeesList;
