import React from "react";
import Container from "../Container/Container"
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light" style= {{display: 'flex', flexDirection: 'row'}}>
    <div >
      <ul className="navbar-nav">
        <li
          className={
              window.location.pathname === "/home"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/portfolio"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/resume"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/resume" className="nav-link">
            Resumé
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/contact"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>

      </ul>
      <ul>
      <li className="addthis_inline_follow_toolbox" style={{display: 'flex', marginLeft: 'auto'}}></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
