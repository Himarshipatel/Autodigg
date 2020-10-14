import React from "react";
import { Col, Container, Row } from "reactstrap";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Login from "./Login";
import Works from "./Works";
import Registration from "./Registration";
import ContactUs from "./ContactUs";
import WhyUs from "./WhyUs";
import CarSearch from "./CarSearch";

const Home = () => {
  return (
    <>
      <Layout className="layout">
        <div className="home">
          <Header />
          <Container className="main-banner">
            <Row className="banner">
              <Col className="ban-left">
                <h1 className="title">
                  Receive Competing Offers from Your Local Dealers.
                </h1>
                <p className="subtitle">
                  We NEVER Share Your Contact Information with ANYONE.
                </p>
                <div className="you-tube">
                  <div data-yt-url="https://www.youtube.com/embed/SDFUmf8otfc?rel=0&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0">
                    <iframe
                      id="video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen=""
                      width="85%"
                      height="243px"
                      title="video"
                      src="https://www.youtube.com/embed/SDFUmf8otfc?rel=0&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;autoplay=1"
                    ></iframe>
                  </div>
                </div>
              </Col>
              <Col className="ban-right shadow-lg  rounded">
                <Col>
                  <h4 className="car-search-title">Select Car Preferences</h4>
                </Col>
                <Col className="indicate">*indicates mandatory field.</Col>
                <CarSearch />
              </Col>
            </Row>
          </Container>
        </div>
        <Works />
        <Container fluid={true}>
          <WhyUs />
        </Container>
        <Container fluid={true}>
          <Row className="login-reg">
            <Col md="6" className="login">
              <Col className="dealer-title">DEALER</Col>
              <Login />
            </Col>
            <Col md="6" className="register">
              <Col className="dealer-title">BUYER</Col>
              <Col>
                <Registration />
              </Col>
            </Col>
          </Row>
        </Container>
        <Container fluid={true}>
          <ContactUs />
        </Container>
      </Layout>
    </>
  );
};

export default Home;
