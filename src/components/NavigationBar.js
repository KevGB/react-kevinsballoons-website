import React from "react";
import "./componentcss/navigationbar.css";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

import Logo from "../app/assets/img/BowtieLogo.png";

const NavigationBarSmall = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <Navbar className="navbar navbar-small" dark sticky="top">
      <NavbarBrand className="ms-2" href="/">
        <img src={Logo} alt="Kevin's Balloons logo" className="float-start" />
      </NavbarBrand>

      <NavbarToggler onClick={() => setNavbarOpen(!navbarOpen)} />
      <Collapse isOpen={navbarOpen} navbar>
        <Nav className="ms-auto" navbar>
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
          <NavItem>
            <NavLink className="nav-link" to="/blog">
              Blog
            </NavLink>
          </NavItem>
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
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavigationBarSmall;
