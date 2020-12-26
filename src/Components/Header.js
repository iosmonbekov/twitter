import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="header">
      <div className="header__menu">
        <h2>
          <NavLink className="navLogo" to="/">
            My Blog
          </NavLink>
        </h2>
        <ul className="header__list">
          <li>
            <NavLink className="navLink" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/add">
              Add
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/contacts">
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
