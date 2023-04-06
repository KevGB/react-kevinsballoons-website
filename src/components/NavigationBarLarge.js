import React from "react";
import "./componentcss/navigationbar.css";
import { NavbarBrand, NavItem } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

import Logo from "../app/assets/img/BowtieLogo.png";

const NavigationBarLarge = () => {
  return (
    <div className="navbar">
      <div className="mx-auto navbar-links">
        <NavItem>
          <Link className="nav-link" to="/services">
            Services
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/book">
            Book
          </Link>
        </NavItem>
        <NavbarBrand className="logo" href="/">
          <img src={Logo} alt="Kevin's Balloons logo" className="float-start" />
        </NavbarBrand>

        <NavItem>
          <Link className="nav-link" to="/gallery">
            Gallery
          </Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </NavItem>
      </div>
    </div>
  );
};

export default NavigationBarLarge;
