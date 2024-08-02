import React from "react";
import { Col, Container, Row } from "reactstrap";

const DronePortfolio = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={8} className="drone_portfolio">
            <h1 className="text-center portfolio_head fw-bold">Significant undertaking Projects in our portfolio</h1>
            <div className="text-center fw-bold fs-5">
            <p className="pt-5 fs-2">VBSY<span className="px-5">NFL-Bihar</span><span  className="px-5">FACT</span><span className="px-5">GNFC</span></p>
            </div>
            <div className="text-align-center">
              <img
                src="https://purepng.com/public/uploads/large/purepng.com-white-flying-dronedronecameraflyingtechnologyspyingaction-211519338088vsjob.png"
                alt="image"
                className="w-50"
              />
            </div>
            <div>
              <Row>
                <Col md={4}>
                <i class="fa-solid fa-spray-can-sparkles info_icons1"></i>
                  <h1 className="text-center fs-2">Spraying Coverage <div>Area</div></h1>
                  <p className="text-center">20,000+ acres</p>
                </Col>
                <Col md={4}>
                <i class="fa-solid fa-user-tie info_icons2"></i>
                  <h1 className="text-center fs-2">Drogo Service <div>Employees</div></h1>
                  <p className="text-center">400+ acres</p>
                </Col>
                <Col md={4}>
                <i class="fa-solid fa-tractor info_icons2"></i>
                  <h1 className="text-center fs-2">Agri Hubs</h1>
                  <p className="text-center">50</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={4} className="drone_benefits">
            <h2 className="fs-1 fw-bold pb-5">Benefits</h2>
            <Row>
              <Col md={12} className="pb-5">
              <i class="fa-solid fa-gamepad info_icons3"></i>
                <h3 className="text-center fw-bold">For Co-operates</h3>
                <p className="text-center fs-4">Outsourcing</p>
                <p className="text-center fs-4">Business & Marketing</p>
                <p className="text-center fs-4">Development</p>
              </Col>
            </Row>
            <Row className="pt-4">
              <Col md={12} className="pb-5">
              <i class="fa-solid fa-wheat-awn info_icons3"></i>
                <h3 className="text-center fw-bold">Farmers</h3>
                <p className="text-center fs-4">Saves Time</p>
                <p className="text-center fs-4">Spraying Efficiency</p>
                <p className="text-center fs-4">Reduced chemical Exposure</p>
              </Col>
            </Row>
            <Row className="pt-4">
              <Col md={12} className="pb-5">
              <i class="fa-solid fa-helicopter info_icons3"></i>
                <h3 className="text-center fw-bold">Co-pilots </h3>
                <p className="text-center fs-4">Career Growth </p>
                <p className="text-center fs-4">Professional</p>
                <p className="text-center fs-4">Employment</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DronePortfolio;
