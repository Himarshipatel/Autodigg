import React from "react";
import { Col, Row } from "reactstrap";
import icon1 from "../images/icon_01.png";
import icon2 from "../images/icon_02.png";
import icon3 from "../images/icon_03.png";
const WhyUs = () => {
  return (
    <>
      <Row>
        <Col className="deff-title">
          <h2>What Differentiates us from our Competitors?</h2>
        </Col>
      </Row>
      <Row>
        <Col className="deff-subtitle">WHY US?</Col>
      </Row>
      <Row className="icon">
        <Col md="4">
          <img src={icon1} alt="" />
          <h4 className="control">Privacy Control</h4>
          <h6 className="description">
            - You decide when to share your contact details and with whom.
          </h6>
          <h6 className="description">
            - We don't share or sell your personal information with anyone.
          </h6>
        </Col>
        <Col md="4">
          <img src={icon2} alt="" />
          <h4 className="control">Go Right to the Source</h4>
          <h6 className="description">
            - Connect directly with local Dealerships.
          </h6>
          <h6 className="description">- Communicate directly in real time.</h6>
        </Col>
        <Col md="4">
          <img src={icon3} alt="" />
          <h4 className="control">Personalized, Fair and Free</h4>
          <h6 className="description">- AutoDigg is open, fair, and free.</h6>
          <h6 className="description">
            - Receive personalized offer rather than redundant list of cars.
          </h6>
          <h6 className="description">
            - No pressure, walk away anytime without any obligation.
          </h6>
        </Col>
      </Row>
    </>
  );
};

export default WhyUs;
