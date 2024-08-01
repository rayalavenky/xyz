// src/DroneData.js
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import flight_time from '../../Assets/krishi2.0/flight-time.gif'
import flying_range from '../../Assets/krishi2.0/flyingRange.gif'
import spraySpeed from '../../Assets/krishi2.0/spraySpeed.gif'
import tank from '../../Assets/krishi2.0/tank.gif'


const DroneData = () => {
  return (
    <div className="drone-data-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md="8">
            <h1 className="drone-data-title">KEY FEATURES</h1>
            <p className="drone-data-subtitle">These are the Key Features of drones</p>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col xs="6" md="3">
            <div className="drone-data-item">
              <div>
                <img src={flight_time} className='keyfeature_image'/>
              </div>
              <div className="vertical-line"></div>
              <div className="drone-data-item-info">
                <h4>Endurance</h4>
                <p>32 Minutes</p>
              </div>
            </div>
          </Col>
          <Col xs="6" md="3">
            <div className="drone-data-item">
            <div>
                <img src={flying_range} className='keyfeature_image'/>
              </div>
              <div className="vertical-line"></div>
              <div className="drone-data-item-info">
                <h4>Flying Range</h4>
                <p>150 Meters</p>
              </div>
            </div>
          </Col>
          <Col xs="6" md="3">
            <div className="drone-data-item">
            <div>
                <img src={tank} className='keyfeature_image'/>
              </div>
              <div className="vertical-line"></div>
              <div className="drone-data-item-info">
                <h4>Spray Tank</h4>
                <p>3.3-4 Meters</p>
              </div>
            </div>
          </Col>
          <Col xs="6" md="3">
            <div className="drone-data-item">
            <div>
                <img src={spraySpeed} className='keyfeature_image'/>
              </div>
              <div className="vertical-line"></div>
              <div className="drone-data-item-info">
                <h4>Spray Swath</h4>
                <p>10 Litres</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DroneData;
