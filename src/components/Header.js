import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button,
  Col,
  Row,
} from "reactstrap";
import { SocialIcon } from "react-social-icons";

import logo from "../images/logo-autodigg-50x33.png";
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="home-page">
      <Navbar expand="md" className="menubar">
        <NavbarBrand href="/">
          <img src={logo} alt="" className="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/" className="menulist text-white font-title">
                HOW DOES IT WORKS?
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="menulist text-white font-title">
                WHY US?
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="menulist text-white font-title">
                CONTACT US
              </NavLink>
            </NavItem>
          </Nav>

          <NavLink
            href="/"
            className="menulist text-white font-title text-left"
          >
            BLOG
          </NavLink>
          <NavLink
            href="/"
            className="menulist text-white font-title text-left"
          >
            DEALERS
          </NavLink>

          <NavbarText>
            {/* <Col className="blog">BLOG</Col>
            <Col className="blog">DEALERS</Col> */}

            <Col className="sign-in-register">SIGN IN/REGISTER</Col>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
