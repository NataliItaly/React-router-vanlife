import React from "react";
import logo from "../assets/images/logo.svg";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/" className="header-logo">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header-link header-link-active" : "header-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "header-link header-link-active" : "header-link"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) =>
            isActive ? "header-link header-link-active" : "header-link"
          }
        >
          Vans
        </NavLink>
        <NavLink
          to="/host"
          className={({ isActive }) =>
            isActive ? "header-link header-link-active" : "header-link"
          }
        >
          Dashboard
        </NavLink>
      </nav>
    </header>
  );
}
