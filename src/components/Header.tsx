import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

const Header = () => {
  return (
    <header className="headerboard">
      <div className=" name-font">
        <p>Hello! Akshay Kovi,</p>
      </div>
      <div className="search-field-head-bar">
        <p className="search-field-icon">
          <HiOutlineSearch />
        </p>
        <input
          type="text"
          className="search-field"
          placeholder="Search..."
        />
      </div>
    </header>
  );
};

export default Header;
