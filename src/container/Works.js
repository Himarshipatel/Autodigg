import React from "react";
import { Row, Col, Container } from "reactstrap";
import panel1 from "../images/panels-icon-1.png";
import panel2 from "../images/panels-icon-2.png";
import panel3 from "../images/panels-icon-3.png";
import panel4 from "../images/panels-icon-4.png";
import panel5 from "../images/panels-icon-5.png";

const Works = () => {
  return (
    <>
      <div className="main-work">
        <Container className="worked">
          <h4 className="work-title">How Does It Work?</h4>
          <Row className="work-row">
            <Col className="work-left" md="4">
              <h3 className="work-subtitle">Select Car Preference</h3>
              <p className="content">
                Provide your car type, make, model and other preferences.
              </p>
            </Col>
            <Col className="work-right" md="4">
              <img src={panel1} alt="" className="panel1" />
            </Col>
            <Col md="4"></Col>
          </Row>
          <Row className="work-row">
            <Col md="4"></Col>
            <Col className="work-left1" md="4">
              <img src={panel2} alt="" className="panel2" />
            </Col>
            <Col className="work-right1" md="4">
              <h3 className="work-subtitle">Information Broadcast</h3>
              <p className="content">
                Preferences are sent to dealers without sharing your contact
                information.
              </p>
            </Col>
          </Row>
          <Row className="work-row">
            <Col className="work-left3" md="4">
              <h3 className="work-subtitle">Personalized Offer</h3>
              <p className="content">Receive multiple bids from the Dealers.</p>
            </Col>
            <Col className="work-right3" md="4">
              <img src={panel3} alt="" className="panel3" />
            </Col>
          </Row>
          <Row className="work-row">
            <Col md="4"></Col>
            <Col className="work-left1" md="4">
              <img src={panel4} alt="" />
            </Col>
            <Col className="work-right1" md="4">
              <h3 className="work-subtitle">Connect And Communicate</h3>
              <p className="content">Read offer details, chat and negotiate.</p>
            </Col>
          </Row>
          <Row className="work-row">
            <Col className="work-left" md="4">
              <h3 className="work-subtitle">Exchange Contact Infromation</h3>
              <p className="content">Like the bid and schedule a test drive.</p>
            </Col>
            <Col className="work-right" md="4">
              <img src={panel5} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Works;

// <Container fluid={true}>
// <Row>
//   <Col className="work-title">How Does It Work?</Col>
// </Row>
// <Row className="working">
//   <Col className="reverse">
//     <h4>Select Car Preference</h4>
//     <p>Provide your car type, make, model and other preferences.</p>
//   </Col>
//   <Col className="panel">
//     <img src={panel1} alt="" />
//   </Col>
// </Row>

// <Row className="working-info">
//   <Col>
//     <img src={panel2} alt="" />
//   </Col>
//   <Col>
//     <h4>Information Broadcast</h4>
//     <p>
//       Preferences are sent to dealers without sharing your contact
//       information.
//     </p>
//   </Col>
// </Row>
// <Row className="working-off">
//   <Col>
//     <h4>Personalized Offer</h4>
//     <p>Receive multiple bids from the Dealers.</p>
//   </Col>
//   <Col>
//     <img src={panel3} alt="" />
//   </Col>
// </Row>
// <Row className="working-connect">
//   <Col>
//     <img src={panel4} alt="" />
//   </Col>
//   <Col>
//     <h4>Connect And Communicate</h4>
//     <p>Read offer details, chat and negotiate.</p>
//   </Col>
// </Row>
// <Row className="working-off">
//   <Col>
//     <h4>Exchange Contact Infromation</h4>
//     <p>Like the bid and schedule a test drive.</p>
//   </Col>
//   <Col>
//     <img src={panel5} alt="" />
//   </Col>
// </Row>
// </Container>
