import React from "react";
import "./header.css";
import logo from "../../images/Logo_netflix.png";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img src={logo} alt="netflix-logo" />
      </Link>
      <div className="nav-items">
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recent">Recently Added</Link>
        <Link to="/mylist">My List</Link>
      </div>
      <ImSearch />
    </nav>
  );
};

export default Header;
