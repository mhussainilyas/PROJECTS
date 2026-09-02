import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiAntennapod } from "react-icons/si";
import { FaFire } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="sticky top-0 z-20 flex max-sm:justify-between sm:grid sm:grid-cols-[1fr_2fr_1fr] bg-base-100 border-b border-black/10">
      <div className="px-6 py-4">
        <Link
          to={"/"}
          className="text-xl font-bold text-base-content flex items-center gap-2"
        >
          <SiAntennapod className="text-xl text-warning" /> HSN News
        </Link>
      </div>

      <div className="flex items-center gap-2 text-lg border-x border-black/10 px-6 py-4 justify-center max-sm:hidden">
        <FaFire className="text-orange-400" />
        <p className="text-neutral/90">Breaking News. Trusted Updates</p>
      </div>

      <div
        className="flex items-center justify-end gap-4 font-semibold px-6 py-4"
        id="header-navlinks"
      >
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/news"}>News</NavLink>
        <button>
          <FaRegBell />
        </button>
      </div>
    </div>
  );
}
