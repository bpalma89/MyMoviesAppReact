import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="topnav">
      <Link to="/">
        <b>My Movies</b>
      </Link>
      <Link to="/search">Search</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
}

export default Navbar;
