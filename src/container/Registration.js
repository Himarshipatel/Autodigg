import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { signupUser } from "../redux/actions/AuthAction";

import { useDispatch } from "react-redux";
import { Col, Row, Input, Form, FormGroup, Button } from "reactstrap";

const registrationSchema = Yup.object().shape({
  name: Yup.string().required("*name is a required field"),
  email: Yup.string().email().required("*email is a required field"),
  password: Yup.string()
    .required("*password is a required field")
    .min(8, "password must be 8 character"),
});

const Registration = () => {
  const { control, register, handleSubmit, errors } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(signupUser(data));
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={3}></Col>
          <Col md={6} className="input">
            <FormGroup>
              <Controller
                placeholder="Name"
                as={Input}
                type="text"
                name="name"
                defaultValue=""
                className="reg-message"
                control={control}
                refs={register}
              />
              {errors && errors.name && (
                <span className="text-white">{errors.name.message}</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6} className="input">
            <FormGroup>
              <Controller
                placeholder="Email"
                as={Input}
                type="text"
                name="email"
                defaultValue=""
                className="reg-message"
                control={control}
                refs={register}
              />
              {errors && errors.email && (
                <span className="text-white">{errors.email.message}</span>
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
                name="password"
                defaultValue=""
                className="reg-message"
                control={control}
                refs={register}
              />
              {errors && errors.password && (
                <span className="text-white">{errors.password.message}</span>
              )}
            </FormGroup>
          </Col>
        </Row>

        <Button className="signin">SIGN UP</Button>
      </Form>
    </>
  );
};

export default Registration;
