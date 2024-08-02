import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CountUp from 'react-countup';

const AboutDrone = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="blue-box d-flex flex-column justify-content-center align-items-center">
          <div className="number-display">
            <CountUp start={0} end={7000} duration={2.75} />
            <span className="unit">+ ha</span>
          </div>
          <p className="description fs-4">Surveyed Area</p>
          
          <div className="number-display">
            <CountUp start={0} end={60000} duration={2.75} />
            <span className="unit">+</span>
          </div>
          <p className="description fs-4">Images Processed</p>
          
          <div className="number-display">
            <CountUp start={0} end={1200} duration={2.75} />
            <span className="unit">+</span>
          </div>
          <p className="description fs-4">Flights</p>
        </Col>
        <Col md={6} className="about-section">
          <h6 className="text-muted">ABOUT</h6>
          <h2>Drone tech, AI and reporting systems that are leveraged to provide accurate insights</h2>
          <p className='fs-4'>We strive to make inroads into the laborious and individual-skill dependent field of manual survey and surveillance with the aim of setting industry standards for tech-adoption on scale.</p>
          <p className='fs-4'>Our team of experts delve in depth into the needs of every industry we serve and developed precise solutions that enhance the overall performance.</p>
          <p className='fs-4'>Our services provide accurate insights to improve the overall efficiency and effectiveness of processes. We address each component as required and deliver a comprehensive solution.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutDrone;
