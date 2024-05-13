import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import logo from "../assets/logo.svg"

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src={logo}
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projets
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            À Propos
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://github.com/awenBourdon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mon CV
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;