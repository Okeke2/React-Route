import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import Dropdown from "./Dropdown";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <header className="h-[10vh] bg-slate-100 flex items-center justify-end gap-5 px-5">
      <input
        type="text"
        placeholder="search..."
        className="h-[6vh] w-64 outline-none border-[1px] border-gray-600 bg-transparent rounded-full hover:border-2 pl-5"
      />
      <button>
        <IoMdNotificationsOutline className="text-xl" />
      </button>

      <div>
        <button
          className="h-10 w-10 bg-blue-500 rounded-full flex justify-center items-center hover:"
          onClick={toggleDropdown}
        >
          TY
        </button>
        <div style={{ display: showDropdown ? "block" : "none" }}>
          <Dropdown />
        </div>
      </div>
    </header>
  );
}

export default Header;
