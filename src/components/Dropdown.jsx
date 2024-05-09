import React, { useState } from "react";
import { IoMdContact } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

function Dropdown() {
  return (
    <div>
      <option value="">Anthony Okeke</option>
      <option value="option1">
        <IoMdContact className="rounded-full bg-gray-400" />
        Edit Profile
      </option>
      <option value="option2">
        <IoMdSettings className="rounded-full bg-gray-400" />
        Settings & Privacy
      </option>
      <option value="option3">
        <IoMdHelpCircle className="rounded-full bg-gray-400" />
        Help & Support
      </option>
      <option value="option3">
        <FaMoon className="rounded-full bg-gray-400" />
        Display & Accessibilty
      </option>
      <option value="option3">
        <IoLogOut className="rounded-full bg-gray-400" />
        Logout
      </option>
    </div>
  );
}

export default Dropdown;
