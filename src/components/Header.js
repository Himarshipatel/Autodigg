import React, { useState, useEffect, useRef } from "react";
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
  // const [navBackground, setNavBackground] = useState(true);
  // const [text, setText] = useState(false);
  // const navRef = useRef();
  // const navRefe = useRef();

  // navRef.current = navBackground;
  // navRefe.current = text;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const show = window.scrollY < 70;
  //     if (navRef.current !== show) {
  //       setNavBackground(show);
  //       // setText(show);
  //     }
  //   };
  //   document.addEventListener("scroll", handleScroll);
  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const show = window.scrollY > 70;
  //     if (navRefe.current !== show) {
  //       setText(show);
  //     }
  //   };
  //   document.addEventListener("scroll", handleScroll);
  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
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
            <Col className="sign-in-register">SIGN IN/REGISTER</Col>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
