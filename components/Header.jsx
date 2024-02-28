import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <Link to="/" className="header__link">
          Home
        </Link>
        <Link to="/about" className="header__link">
          About
        </Link>
        <Link to="/vans" className="header__link">
          Vans
        </Link>
        <Link to="/host" className="header__link">
          Dashboard
        </Link>
      </nav>
    </header>
  );
}
