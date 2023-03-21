import React from "react";
import "./componentcss/navigationbar.css";
import { NavbarBrand, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

import Logo from "../app/assets/img/BowtieLogo.png";

const NavigationBarLarge = () => {
  return (
    <div className=" navbar">
      <NavItem>
        <NavLink className="nav-link" to="/services">
          Services
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to="/book">
          Book
        </NavLink>
      </NavItem>
      <NavbarBrand className="ms-2" href="/">
        <img src={Logo} alt="Kevin's Balloons logo" className="float-start" />
      </NavbarBrand>

      <NavItem>
        <NavLink className="nav-link" to="/gallery">
          Gallery
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </NavItem>
    </div>
  );
};

export default NavigationBarLarge;
