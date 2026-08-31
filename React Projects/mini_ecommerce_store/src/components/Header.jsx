import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-black py-3 px-6 flex items-center justify-between">
      <Link to={"/"}>
        <img className="w-12.5" src="/store-logo.png" alt="logo" />
      </Link>

      <div className="flex gap-4 text-white" id="nav-links">
        <NavLink to={"/"} className="text-md font-semibold">
          Home
        </NavLink>
        <NavLink to={"/products"} className="text-md font-semibold">
          Products
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
