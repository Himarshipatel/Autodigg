import React, { useEffect } from "react";
import { Col, Row, Input, Form, FormGroup, Button } from "reactstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { carMake, carModal } from "../redux/actions/CarSearchAction";
import { useDispatch, useSelector } from "react-redux";
const carSearchSchema = Yup.object().shape({
  cartype: Yup.string().email().required("*cartype is a required field"),
  carmake: Yup.string().email().required("*carmake is a required field"),
  carmodel: Yup.string().email().required("*carmodel is a required field"),
  estimate: Yup.string().email().required("*estimate is a required field"),
  miles: Yup.string().email().required("*miles is a required field"),
  zipcode: Yup.string().email().required("*zipcode is a required field"),
});

const CarSearch = () => {
  const { control, register, handleSubmit, errors } = useForm({
    resolver: yupResolver(carSearchSchema),
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(carMake());
  }, [dispatch]);

  const handelChange = (e) => {
    dispatch(carModal(e.target.value));
  };
  const onSubmit = (data) => {};
  const { carDetail, carData } = useSelector((state) => ({
    carDetail: state.carSearchReducer.carDetail,
    carData: state.carSearchReducer.carmodal.carModalData,
  }));
  console.log(carData);
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="dropdown">
          <Col>
            <FormGroup>
              <Input
                type="select"
                name="cartype"
                defaultValue=""
                control={control}
                className="car-search-in"
                refs={register}
                onChange={handelChange}
              >
                <option>Car Type*</option>
                {carDetail !== null &&
                  carDetail.results.carMake.map((item, i) => (
                    <option value={item.makeId} key={i}>
                      {item.makeName}
                    </option>
                  ))}
              </Input>
              {errors && errors.cartype && (
                <span className="text-warning">{errors.cartype.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="select"
                name="carmake"
                defaultValue=""
                control={control}
                refs={register}
                className="car-search-in"
                onChange={handelChange}
              >
                <option>Car Make*</option>
                {carDetail !== null &&
                  carDetail.results.carMake.map((item, i) => (
                    <option value={item.makeId} key={i}>
                      {item.makeName}
                    </option>
                  ))}
              </Input>
              {errors && errors.carmake && (
                <span className="text-warning">{errors.carmake.message}</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row className="dropdown">
          <Col>
            <FormGroup>
              <Input
                type="select"
                name="carmodel"
                defaultValue=""
                control={control}
                className="car-search-in"
                refs={register}
              >
                <option>Car Modal*</option>
                {carData !== null &&
                  carData.results.carModel.map((item) => (
                    <option value={item.modelId}>{item.modelName}</option>
                  ))}
              </Input>
              {errors && errors.carmodel && (
                <span className="text-warning">{errors.carmodel.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="select"
                name="estimate"
                defaultValue=""
                control={control}
                refs={register}
                className="car-search-in"
                onChange={handelChange}
              >
                <option>Estimated Credit Score*</option>
                {carDetail !== null &&
                  carDetail.results.carMake.map((item, i) => (
                    <option value={item.makeId} key={i}>
                      {item.makeName}
                    </option>
                  ))}
              </Input>
              {errors && errors.estimate && (
                <span className="text-warning">{errors.estimate.message}</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row className="dropdown">
          <Col>
            <FormGroup>
              <Input
                type="select"
                name="miles"
                defaultValue=""
                control={control}
                className="car-search-in"
                refs={register}
              >
                <option>50 miles from</option>
                {carData !== null &&
                  carData.results.carModel.map((item) => (
                    <option value={item.modelId}>{item.modelName}</option>
                  ))}
              </Input>
              {errors && errors.miles && (
                <span className="text-warning">{errors.miles.message}</span>
              )}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="select"
                name="zipcode"
                defaultValue=""
                control={control}
                refs={register}
                className="car-search-in"
                onChange={handelChange}
              >
                <option>Zip Code*</option>
                {carDetail !== null &&
                  carDetail.results.carMake.map((item, i) => (
                    <option value={item.makeId} key={i}>
                      {item.makeName}
                    </option>
                  ))}
              </Input>
              {errors && errors.zipcode && (
                <span className="text-warning">{errors.zipcode.message}</span>
              )}
            </FormGroup>
          </Col>
        </Row>
        <Row className="get-start">
          <Col>
            <Button className="get-started">GET STARTED</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default CarSearch;
