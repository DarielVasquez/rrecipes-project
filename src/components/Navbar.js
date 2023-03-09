import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="center-navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <SearchForm />
      </div>
    </nav>
  );
};

export default Navbar;
