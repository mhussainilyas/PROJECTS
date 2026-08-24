import React, { useEffect, useState } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import data from "../data/data.json";

function Header({ setDataList }) {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    let filteredData = data.filter((item, index) => {
      return item.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    setDataList(filteredData);
  }, [searchValue, setDataList]);

  return (
    <header className="py-4 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 flex max-sm:flex-col max-sm:gap-5 items-center justify-between shadow-sm">
      <div className="flex items-center gap-2 text-xl font-medium">
        <FaBagShopping />
        <a href="#">
          Dev<span className="text-orange-400">Ambassador</span>
        </a>
      </div>

      <div className="flex items-center max-sm:w-full border border-white/15 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="search item..."
          className="py-2 px-4 border-none outline-none w-full"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="bg-neutral-900 px-4 py-3 hover:text-orange-400 cursor-pointer">
          <FaSearch />
        </div>
      </div>
    </header>
  );
}

export default Header;
