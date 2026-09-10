import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Button from "../utilities/Button";
import { useDispatch } from "react-redux";
import {
  openDeletePopup,
  openEmployeePopup,
} from "../store/slices/popup.slice";
import { updateEmployee } from "../store/thunks/employee.thunk";

function Employee({ details }) {
  const dispatch = useDispatch();

  function handleHighlighted(details) {
    dispatch(
      updateEmployee({
        id: details.id,
        details: {
          ...details,
          highlighted: !details.highlighted,
        },
      }),
    );
  }

  return (
    <li className="list-row p-0 pb-4">
      <div>
        <img
          className="size-10 rounded-box object-cover"
          alt={details.name}
          src={details.profileURL}
        />
      </div>
      <div>
        <div>{details.name}</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {details.email}
        </div>
      </div>
      <p className="list-col-wrap text-xs">{details.bio}</p>
      <Button onClick={() => dispatch(openEmployeePopup(details))}>
        <CiEdit className="text-lg" />
      </Button>
      <Button onClick={() => dispatch(openDeletePopup(details.id))}>
        <MdOutlineDelete className="text-lg" />
      </Button>
      <Button onClick={() => handleHighlighted(details)}>
        {details.highlighted ? <FaHeart /> : <FaRegHeart />}
      </Button>
    </li>
  );
}

export default Employee;
