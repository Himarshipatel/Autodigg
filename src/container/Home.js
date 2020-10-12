import React from "react";
import { Col, Container, Row, Input, Form, FormGroup } from "reactstrap";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Login from "./Login";
import Works from "./Works";
import Registration from "./Registration";
import ContactUs from "./ContactUs";
//import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

import icon1 from "../images/icon_01.png";
import icon2 from "../images/icon_02.png";
import icon3 from "../images/icon_03.png";
//import { yupResolver } from "@hookform/resolvers";
// const formSchema = yup.object().shape({
//   name: yup.string().required("*Name is Required"),
// });
const Home = () => {
  const { control, register, handleSubmit, errors } = useForm({});
  const onSubmit = (data) => {
    console.log(data);
  };
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
                  <div
                    class="youtube-thumb youtube-video-place"
                    data-yt-url="https://www.youtube.com/embed/SDFUmf8otfc?rel=0&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0"
                  >
                    <iframe
                      id="video"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen=""
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
                <Row className="dropdown">
                  <Col>
                    <UncontrolledDropdown>
                      <DropdownToggle className={"car-search"}>
                        Car Type*
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                  <Col>
                    <UncontrolledDropdown>
                      <DropdownToggle className={"car-search"}>
                        Car Make*
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                </Row>
                <Row className="dropdownn">
                  <Col>
                    <UncontrolledDropdown>
                      <DropdownToggle className={"car-search"}>
                        Car Model*
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                  <Col>
                    <UncontrolledDropdown>
                      <DropdownToggle className={"car-search"}>
                        Estimated Credit Score
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                </Row>
                <Row className="dropdownn">
                  <Col>
                    <UncontrolledDropdown>
                      <DropdownToggle className={"car-search"}>
                        50 miles from
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                  <Col>
                    <UncontrolledDropdown>
                      <DropdownToggle className={"car-search"}>
                        Zip Code*
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                </Row>
                <Row className="get-start">
                  <Col>
                    <Button className="get-started">GET STARTED</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <Works />
        <Container fluid={true}>
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
              <h6 className="description">
                - Communicate directly in real time.
              </h6>
            </Col>
            <Col md="4">
              <img src={icon3} alt="" />
              <h4 className="control">Personalized, Fair and Free</h4>
              <h6 className="description">
                - AutoDigg is open, fair, and free.
              </h6>
              <h6 className="description">
                - Receive personalized offer rather than redundant list of cars.
              </h6>
              <h6 className="description">
                - No pressure, walk away anytime without any obligation.
              </h6>
            </Col>
          </Row>
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
