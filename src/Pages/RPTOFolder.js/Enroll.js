import React from "react";
import { Col, Container, Row } from "reactstrap";
import learn_from from "../../Assets/RPTOImages/learn_from.png";
import food_facility from "../../Assets/RPTOImages/food_facilities.png";
import Nourishing from "../../Assets/RPTOImages/Nourishing.png";
import beYourOwn from "../../Assets/RPTOImages/beYourOwn.png";
import well_equipped from "../../Assets/RPTOImages/well_equipped.png";
import live_field from "../../Assets/RPTOImages/live_field.png";
import affordable from "../../Assets/RPTOImages/affordable.png";
import all_india from "../../Assets/RPTOImages/all_india.png";

const Enroll = () => {
  return (
    <div>
      <Container fluid className="enroll_container">
        <div className="pt-5">
          <h1 className="enroll_head1 text-center">Launch Your Career as a</h1>
          <h1 className="text-center text-primary pt-4 enroll_head2">
            Drone Pilot
          </h1>
        </div>
        <Row className="d-flex flex-row justify-content-center align-items-center text-center money_row">
          <Col md="1">
            <p className="money">59,499/</p>
          </Col>
          <Col md="3">
            <button className="money_button">39,499/</button>
          </Col>
        </Row>
        <div>
          <button type="button" className=" enroll_button">
            Enroll now
          </button>
        </div>
      </Container>
      <div className="enroll_container2">
        <h1 className="text-center">Why Choose Us?</h1>
        <p className="text-center enroll_head_data">
          Andhra Pradesh’s 1st Private RPTO with Industy leading training
          facility.
        </p>
        <Container>
          <Row>
            <Col md="6">
              <div className="d-flex">
                <img src={learn_from} alt="" className="enroll_image"/>
                  <p className="enroll_image_data">
                    Learn from highly experienced drone training instructors
                  </p>
              </div>
            </Col>
            <Col md="6">
              <div className="d-flex">
                  <img src={food_facility} alt="" className="enroll_image" />
                <p className="enroll_image_data">Imparting training in small batches</p>
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col md="6">
              <div className="d-flex">
                  <img src={Nourishing} alt="" className="enroll_image" />
                <p className="enroll_image_data">Individual focus on every student</p>
              </div>
            </Col>
            <Col md="6">
              <div className="d-flex">
                  <img src={beYourOwn} alt="" className="enroll_image" />
                <p className="enroll_image_data">Be your own boss & start your entrepreneurial journey</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <div className="d-flex">
                  <img src={well_equipped} alt="" className="enroll_image" />
                <p className="enroll_image_data">
                  We're equipped with the latest simulation softwares & tools
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className="d-flex">
                  <img src={live_field} alt="" className="enroll_image" />
                <p className="enroll_image_data">Hands on experience on live projects</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <div className="d-flex">
                  <img src={affordable} alt="" className="enroll_image" />
                <p className="enroll_image_data">Optional affordable accommodation</p>
              </div>
            </Col>
            <Col md="6">
              <div className="d-flex">
                  <img src={all_india} alt="" className="enroll_image" />
                <p className="enroll_image_data">All India certification acceptance</p>
              </div>
            </Col>
          </Row>
          <div>
            <button type="button" className=" enroll_button2">
              Enroll now
            </button>
          </div>
        </Container>
      </div>
      <div className="enroll_container3">
        <Container fluid className="inside_enroll_container3">
          <Row>
            <Col md="4">
              <p className="fs-2">RPTO certification</p>
              <h2 className="enroll_number">10</h2>
              <p className="pt-3 fs-2">years validity</p>
            </Col>
            <Col md="4">
            <p className="fs-2">Upto</p>
              <h2 className="enroll_number">24.8Kg</h2>
              <p className="pt-3 fs-2">Weight Category</p>
            </Col>
            <Col md="4">
            <p className="fs-2">duration</p>
              <h2 className="enroll_number">7</h2>
              <p className="pt-3 fs-2">Days of joining</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Enroll;
