import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div className="NavBar">
      <div className="temp">
        <div className="templ">
          <img src="/images/logo.png" alt="" className="src" />
        </div>
        <div className="tempr">
          <NavLink to="/submit" className="mobile">
            Share a Plate
          </NavLink>
        </div>
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
          to="/chefs"
          className={({ isActive }) => `menu ${isActive ? "active" : ""}`}
        >
          Chefs
        </NavLink>
        <NavLink
          to="/competitions"
          className={({ isActive }) => `menu ${isActive ? "active" : ""}`}
        >
          Competitions
        </NavLink>
      </div>
      <div className="right">
        <NavLink to="/submit" className="shareButton">
          Share a Plate
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
