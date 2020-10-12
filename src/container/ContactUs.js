import React from "react";
import { Col, Row, Input, Form, FormGroup, Button } from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { contactUs } from "../redux/actions/ContactUsaction";
const contactSchema = Yup.object().shape({
  name: Yup.string().required("*name is a required field"),
  email: Yup.string().email().required("*email is a required field"),
  phone: Yup.string().required("*phone is a required field"),
  message: Yup.string().required("*message is a required field"),
});

const ContactUs = () => {
  const { control, register, handleSubmit, errors } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(contactUs(data));
  };
  return (
    <>
      <Row className="contact">
        <Col className="contact-us">Contact Us</Col>
      </Row>
      <Row className="contact-form">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="form">
            <Col className="input" md="4">
              <FormGroup>
                <Controller
                  placeholder="Name*"
                  as={Input}
                  type="text"
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
                  type="email"
                  name="email"
                  defaultValue=""
                  className="message"
                  control={control}
                  ref={register}
                />
                {errors && errors.email && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
              </FormGroup>
            </Col>
            <Col className="input" md="4">
              <FormGroup>
                <Controller
                  placeholder="Phone*"
                  as={Input}
                  type="tel"
                  name="phone"
                  defaultValue=""
                  className="message"
                  control={control}
                  ref={register}
                />
                {errors && errors.phone && (
                  <span className="text-danger">{errors.phone.message}</span>
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
                  name="message"
                  defaultValue=""
                  control={control}
                  ref={register}
                  className="messages"
                />
                {errors && errors.message && (
                  <span className="text-danger">{errors.message.message}</span>
                )}
              </FormGroup>
            </Col>
          </Row>
          <Button className="send-message">SEND MESSAGE</Button>
        </Form>
      </Row>
    </>
  );
};

export default ContactUs;
