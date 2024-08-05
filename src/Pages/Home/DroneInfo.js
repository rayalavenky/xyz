import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";

const DroneInfo = () => {
  return (
    <Container className="text-center mt-5">
      <div className="section">
        <div className="home-section2">
          <div className="heading">
            <h1 className="fw-bold">Why Krishi 3pro?</h1>
          </div>
          <div className="heading2">
            <p className="fs-3">
              Krishi 3 pro leads globally with a primary focus on providing
              accessible solutions to a diverse farming community. Our platform
              offers superior performance, durability, and reliability, setting
              new standards in agricultural technology.
            </p>
          </div>
        </div>
      </div>
      <Row className="mt-5">
        <Col md="4">
          <Row>
            <Col md="12">
              <h6 className="drone_title fs-3">Highest Endurance Time</h6>
              <p className="droneInfo fs-3">
                Our drone's endurance time is a remarkable 32 minutes, setting a
                new standard in the industry. This extended flight capability
                surpasses that of any competitor, ensuring longer operational
                periods and greater efficiency in agricultural tasks
              </p>
            </Col>
            <Col md="12">
              <h6 className="drone_title fs-3">Environmental perception sensors</h6>
              <p className="droneInfo fs-3">
                Those includes volumetric, terrain characteristics and obstacle
                sensors.
                These sensors collectively enable machines to perceive their
                surroundings accurately and make informed decisions based on
                real-time environmental data, enhancing both safety and
                operational capabilities in various applications.
              </p>
            </Col>
          </Row>
        </Col>
        <Col md="4">
          <img
            src="https://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/inner_product_02-640x385.png"
            alt="Drone"
            className="img-fluid image"
          />
        </Col>
        <Col md="4">
          <Row>
            <Col md="12">
              <h6 className="drone_title fs-3">
                Enhanced with a live streaming camera
              </h6>
              <p className="droneInfo fs-3">
                Integrated with a 720p HD live streaming camera, optimizing
                aerial crop monitoring and real-time data acquisition," enables
                timely decision-making, optimizing irrigation, fertilization,
                and pest management practices for improved crop yields and
                sustainable farming practices
              </p>
            </Col>
            <Col md="12">
              <h6 className="drone_title fs-3">
                Utilizing an advanced S-frame structure
              </h6>
              <p className="droneInfo fs-3">
                In a market dominated by T-frame designs, we implement the
                S-frame configuration made of aluminium to enhance performance
                and reliability.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <Row className="my-5">
        <Col md="6" className="mb-4 ">
          <h3 className="text-uppercase">Aerial Photography<i className="fas fa-camera ml-2"></i></h3>
          <p>
            A drone is an unmanned aerial vehicle (UAV) that is fitted with various equipment including photography and videography leverage agile frameworks.
          </p>
        </Col>
        <Col md="6" className="mb-4">
          <h3 className="text-uppercase">Resolution<i className="fas fa-video ml-2"></i></h3>
          <p>
            These devices can hover and maneuver above your event capturing images and video of not just individuals iterative approaches to corporate strategy.
          </p>
        </Col>
        </Row>
      
      <img
        src="https://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/inner_product_02-640x385.png" 
        alt="Drone"
        className="img-fluid image"
      />
      <Row className="my-5">
      <Col md="6" className="mb-4">
          <h3 className="text-uppercase">Propellers<i className="fas fa-fan ml-2"></i></h3>
          <p>
            Our drone event services provide you with a skilled UAV pilot that will provide drone event photography or good videography a robust synopsis for high level.
          </p>
        </Col>
        <Col md="6" className="mb-4">
          <h3 className="text-uppercase">Powerful & Portable<i className="fas fa-gamepad ml-2"></i></h3>
          <p>
            Drone event videographers can record all the activities (in the water too) throughout the event and record from inaccessible foster collaborative proposition.
          </p>
        </Col>
      </Row> */}
      <Button className="getButton rounded-pill px-5 mt-3 fs-3">Get Started</Button>
    </Container>
  );
};

export default DroneInfo;
