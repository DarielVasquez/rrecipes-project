import React from "react";
import { Link } from "react-router-dom";

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
        <form role="search" className="search">
          <label htmlFor="search">Search for stuff</label>
          <input
            id="search"
            type="search"
            placeholder="Search..."
            autoFocus
            required
          />
          <button type="submit">Go</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
