import React from "react";
import { FaPlus, FaRegHeart } from "react-icons/fa";
import Button from "../utilities/Button";
import { useDispatch } from "react-redux";
import { openEmployeePopup } from "../store/slices/popup.slice";
import { openDrawer } from "../store/slices/drawer.slice";

function Header() {
  const dispatch = useDispatch();

  return (
    <header className="bg-base-200 px-4 sm:px-6">
      <div className="navbar max-w-7xl w-full mx-auto">
        <div className="navbar-start">
          <a className="text-lg font-bold uppercase text-base-content">
            Royal<span className="text-warning">Employee</span>
          </a>
        </div>
        <div className="navbar-end flex items-center gap-2">
          <Button onClick={() => dispatch(openEmployeePopup())}>
            <FaPlus />
          </Button>
          <Button onClick={() => dispatch(openDrawer())}>
            <FaRegHeart />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
