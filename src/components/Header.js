import React, { useState, useRef, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Col,
} from "reactstrap";

import logo from "../images/logo-autodigg-50x33.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [navBackground, setNavBackground] = useState(false);
  const [text, setText] = useState(false);
  const navRef = useRef();
  const navRefe = useRef();

  navRef.current = navBackground;
  navRefe.current = text;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
        // setText(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRefe.current !== show) {
        setText(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar
        expand="md"
        className="menubar"
        style={{
          backgroundColor: navBackground ? "white" : "transparent",
        }}
      >
        <NavbarBrand href="/">
          <img src={logo} alt="" className="logo" />
        </NavbarBrand>

        <NavbarToggler onClick={toggle} className="tog-icon" />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/" className="menulist  font-title">
                HOW DOES IT WORKS?
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="menulist font-title">
                WHY US?
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" className="menulist font-title">
                CONTACT US
              </NavLink>
            </NavItem>
          </Nav>

          <NavLink href="/" className="menulist font-title ">
            BLOG
          </NavLink>
          <NavLink href="/" className="menulist  font-title ">
            DEALERS
          </NavLink>

          <NavbarText>
            <Col className="sign-in-register">SIGN IN/REGISTER</Col>
          </NavbarText>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
