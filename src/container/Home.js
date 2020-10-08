import React from "react";
import { Col, Container, Row, Input, Label, Form, FormGroup } from "reactstrap";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { Nav, NavLink, NavItem } from "reactstrap";

import icon1 from "../images/icon_01.png";
import icon2 from "../images/icon_02.png";
import icon3 from "../images/icon_03.png";
import panel1 from "../images/panels-icon-1.png";
import panel2 from "../images/panels-icon-2.png";
import panel3 from "../images/panels-icon-3.png";
import panel4 from "../images/panels-icon-4.png";
import panel5 from "../images/panels-icon-5.png";
import dealer from "../images/home-sellers-bg.jpg";
import buyer from "../images/home-buyers-bg.jpg";
//import { yupResolver } from "@hookform/resolvers";
const formSchema = yup.object().shape({
  name: yup.string().required("*Name is Required"),
});
const Home = () => {
  const { control, register, handleSubmit, errors } = useForm({});
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Layout>
      {/* <div className="home">
        <Header /> */}
      {/* <Container className="main-banner">
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
        </Container> */}
      {/* -------------------what Defriantiate us from our compititor?----------------- */}

      {/* -------------------what Defriantiate us from our compititor?----------------- */}
      {/* </div> */}
      {/* <Container fluid={true} className="work">
        <Row>
          <Col className="work-title">How Does It Work?</Col>
        </Row>
        <Row className="working">
          <Col>
            <h4>Select Car Preference</h4>
            <p>Provide your car type, make, model and other preferences.</p>
          </Col>
          <Col>
            <img src={panel1} alt="" />
          </Col>
        </Row>

        <Row className="working-info">
          <Col>
            <img src={panel2} alt="" />
          </Col>
          <Col>
            <h4>Information Broadcast</h4>
            <p>
              Preferences are sent to dealers without sharing your contact
              information.
            </p>
          </Col>
        </Row>
        <Row className="working-off">
          <Col>
            <h4>Personalized Offer</h4>
            <p>Receive multiple bids from the Dealers.</p>
          </Col>
          <Col>
            <img src={panel3} alt="" />
          </Col>
        </Row>
        <Row className="working-connect">
          <Col>
            <img src={panel4} alt="" />
          </Col>
          <Col>
            <h4>Connect And Communicate</h4>
            <p>Read offer details, chat and negotiate.</p>
          </Col>
        </Row>
        <Row className="working-off">
          <Col>
            <h4>Exchange Contact Infromation</h4>
            <p>Like the bid and schedule a test drive.</p>
          </Col>
          <Col>
            <img src={panel5} alt="" />
          </Col>
        </Row>
      </Container> */}
      {/* <Container fluid={true}>
        <Row>
          <Col className="deff-title">
            {" "}
            <h2>What Differentiates us from our Competitors?</h2>
          </Col>
        </Row>
        <Row>
          <Col className="deff-subtitle">WHY US?</Col>
        </Row>
        <Row className="icon">
          <Col>
            <img src={icon1} alt="" />
            <br />
            <br />
            Privacy Control
            <br />
            - You decide when to share your contact details and with whom.
            <br />- We don't share or sell your personal information with
            anyone.
          </Col>
          <Col>
            <img src={icon2} alt="" /> <br />
            <br />
            Go Right to the Source
            <br />
            - Connect directly with local Dealerships.
            <br />- Communicate directly in real time.
          </Col>
          <Col>
            <img src={icon3} alt="" />
            <br />
            <br />
            Personalized, Fair and Free
            <br />- AutoDigg is open, fair, and free.
            <br /> - Receive personalized offer rather than redundant list of
            cars.
            <br />- No pressure, walk away anytime without any obligation.
          </Col>
        </Row>
      </Container> */}
      {/* <Container fluid={true}>
        <Row className="login-reg">
          <Col md="6" className="login">
            <Col className="dealer-title">DEALER</Col>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col md={3}></Col>
                <Col md={6} className="input">
                  <FormGroup>
                    <Controller
                      placeholder="Email address"
                      as={Input}
                      type="text"
                      name="name"
                      defaultValue=""
                      className="reg-message"
                      control={control}
                      ref={register}
                    />
                    {errors && errors.name && (
                      <span className="text-danger">{errors.name.message}</span>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={3}></Col>
                <Col md={6} className="input">
                  <FormGroup>
                    <Controller
                      placeholder="Password"
                      as={Input}
                      type="password"
                      name="name"
                      defaultValue=""
                      className="reg-message"
                      control={control}
                      ref={register}
                    />
                    {errors && errors.name && (
                      <span className="text-danger">{errors.name.message}</span>
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <Button className="signin">SIGN IN</Button>
              <Col className="forget">Forget password?</Col>
            </Form>
          </Col>
          <Col md="6" className="register">
            <Col className="dealer-title">BUYER</Col>
            <Col>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col md={3}></Col>
                  <Col md={6} className="input">
                    <FormGroup>
                      <Controller
                        placeholder="Name"
                        as={Input}
                        type="text"
                        name="namee"
                        defaultValue=""
                        className="reg-message"
                        control={control}
                        ref={register}
                      />
                      {errors && errors.namee && (
                        <span className="text-danger">
                          {errors.namee.message}
                        </span>
                      )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={3}></Col>
                  <Col md={6} className="input">
                    <FormGroup>
                      <Controller
                        placeholder="Email address"
                        as={Input}
                        type="text"
                        name="name"
                        defaultValue=""
                        className="reg-message"
                        control={control}
                        ref={register}
                      />
                      {errors && errors.name && (
                        <span className="text-danger">
                          {errors.name.message}
                        </span>
                      )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={3}></Col>
                  <Col md={6} className="input">
                    <FormGroup>
                      <Controller
                        placeholder="Password"
                        as={Input}
                        type="password"
                        name="name"
                        defaultValue=""
                        className="reg-message"
                        control={control}
                        ref={register}
                      />
                      {errors && errors.name && (
                        <span className="text-danger">
                          {errors.name.message}
                        </span>
                      )}
                    </FormGroup>
                  </Col>
                </Row>
                <Button className="signin">SIGN UP</Button>
              </Form>
            </Col>
          </Col>
        </Row>
      </Container> */}
      <Container fluid={true}>
        <Row className="contact">
          <Col className="contact-us">Contact Us</Col>
        </Row>
        <Row className="contact-form">
          <Form>
            <Row className="form">
              <Col className="input" md="4">
                <FormGroup>
                  <Controller
                    placeholder="Name*"
                    as={Input}
                    type="password"
                    name="name"
                    defaultValue=""
                    className="message"
                    control={control}
                    ref={register}
                  />
                  {errors && errors.name && (
                    <span className="text-danger">{errors.name.message}</span>
                  )}
                </FormGroup>
              </Col>
              <Col className="input" md="4">
                <FormGroup>
                  <Controller
                    placeholder="Email*"
                    as={Input}
                    type="password"
                    name="name"
                    defaultValue=""
                    className="message"
                    control={control}
                    ref={register}
                  />
                  {errors && errors.name && (
                    <span className="text-danger">{errors.name.message}</span>
                  )}
                </FormGroup>
              </Col>
              <Col className="input" md="4">
                <FormGroup>
                  <Controller
                    placeholder="Phone*"
                    as={Input}
                    type="password"
                    name="name"
                    defaultValue=""
                    className="message"
                    control={control}
                    ref={register}
                  />
                  {errors && errors.name && (
                    <span className="text-danger">{errors.name.message}</span>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col className="inputt">
                <FormGroup>
                  <Controller
                    placeholder="Your message*"
                    as={Input}
                    type="textarea"
                    name="name"
                    defaultValue=""
                    control={control}
                    ref={register}
                    className="messages"
                  />
                  {errors && errors.name && (
                    <span className="text-danger">{errors.name.message}</span>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <Button className="send-message">SEND MESSAGE</Button>
          </Form>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
