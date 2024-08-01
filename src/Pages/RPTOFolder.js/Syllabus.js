import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Syllabus = () => {
  const [activeDay, setActiveDay] = useState('1');

  const dayContent = {
    '1': [
      "Stakeholders & their law & Drone Rules 2021",
      "ATC Procedures",
      "Basic Principles of Flight",
      "Radio Telephony"
    ],
    '2': [
      "Fixed Wing and Aerodynamics",
      "Drone Equipment Maintenance",
      "Multi Rotor Introduction",
      "Weather and Meteorology"
    ],
    '3': [
      "Emergency Identification and Handling",
      "Auxiliary Session BLOVS Experiment & Night Operations",
      "Payload, Installation and Utilization",
      "Image and Video Interpretation",
    ],
    '4': [
      "Flight Simulator Training",
      "Basic Assembly & Maintenance",
      "Simulator test"
    ],
    '5': [
      "Flying with Instructor/Solo",
      "Final Test-Multi rotor",
      "Log Book RPC Creation",
      "Certificate Distribution"
    ]
  };

  return (
    <Container>
      <Row className="my-4 text-center">
        <Col>
          <h1 className="display-4">Syllabus</h1>
          <h2 className="text-success fs-1 pt-4 pb-3">Your 7 Days Learning Journey</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="auto">
          <Button color={activeDay === '1' ? 'success' : 'secondary'} className="mx-4 p-2 px-4 day_button" onClick={() => setActiveDay('1')} >Day 1</Button>
          <Button color={activeDay === '2' ? 'success' : 'secondary'} className="mx-4 p-2 px-4 day_button" onClick={() => setActiveDay('2')} >Day 2</Button>
          <Button color={activeDay === '3' ? 'success' : 'secondary'} className="mx-4 p-2 px-4 day_button" onClick={() => setActiveDay('3')} >Day 3</Button>
          <Button color={activeDay === '4' ? 'success' : 'secondary'} className="mx-4 p-2 px-4 day_button" onClick={() => setActiveDay('4')} >Day 4</Button>
          <Button color={activeDay === '5' ? 'success' : 'secondary'} className="mx-4 p-2 px-4 day_button" onClick={() => setActiveDay('5')} >Day 5 - 7</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <ul>
            {dayContent[activeDay].map((item, index) => (
              <li key={index} className='fs-2'>{item}</li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row className="my-4 text-center">
        <Col>
          <h3 className="font-weight-bold fs-2">Elevate Your Career By Becoming A Drone Pilot</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Syllabus;
