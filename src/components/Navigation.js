import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Logo />
      <ul>
        <NavLink to="/" className={({isActive}) => (isActive ? "nav-active" : "")}end>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({isActive}) => (isActive ? "nav-active" : "")}end
        >
          <li>A Propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
