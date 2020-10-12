import React from "react";
import { Col, Row, Container, NavLink } from "reactstrap";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <>
      <Container fluid={true} className="footer">
        <Row>
          <Col sm="4">
            <h4 className="map">Sitemap</h4>

            <h6 className="foot-sub-title">Homepage</h6>
            <h6 className="foot-sub-title">How it</h6>
            <h6 className="foot-sub-title">Works Blog</h6>
          </Col>
          <Col sm="4">
            <h4 className="map">Contact Us</h4>

            <h6 className="foot-sub-title">support@autodigg.com</h6>
          </Col>
          <Col sm="4">
            <h4 className="map">Follow Us</h4>
            <SocialIcon
              url="https://www.facebook.com/autodigg"
              className={"social"}
              target="_blank"
            />
            <SocialIcon
              url="https://twitter.com/autodigg"
              className={"social"}
              target="_blank"
            />
            <SocialIcon
              url="https://www.instagram.com/autodigg/"
              className={"social"}
              target="_blank"
            />
          </Col>
        </Row>
        <Row>
          <Col className="copy-right">
            <p>Copyright 2020. All rights reserved by: AutoDigg</p>
            <p>
              Registration on or use of this site constitutes acceptance of our
              Terms of Service and Privacy Policy
            </p>
            <p>
              <NavLink
                href="https://www.autodigg.com/frequently-asked-questions"
                className="question"
                target="_blank"
              >
                Frequently Asked Questions
              </NavLink>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
