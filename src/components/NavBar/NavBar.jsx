import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div className="NavBar">
      <div className="left">
        <img src="/images/logo.png" alt="" className="src" />
      </div>
      <div className="center">
        <NavLink
          to="/"
          className={({ isActive }) => `menu ${isActive ? "active" : ""}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/discover"
          className={({ isActive }) => `menu ${isActive ? "active" : ""}`}
        >
          Discover
        </NavLink>
        <NavLink
          to="/feed"
          className={({ isActive }) => `menu ${isActive ? "active" : ""}`}
        >
          Feed
        </NavLink>
        <NavLink
          to="/competitions"
          className={({ isActive }) => `menu ${isActive ? "active" : ""}`}
        >
          Competitions
        </NavLink>
      </div>
      <div className="right">
        <button className="shareButton">Share a Plate</button>
      </div>
    </div>
  );
}

export default NavBar;
