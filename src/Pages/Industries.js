import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Element } from 'react-scroll';
import bgImage from '../Assets/Images/bg7.jpg';
import constructor from '../Assets/Images/constructionvector.png';
import Constuctor from './industries/Constuctor';
import Mining from './industries/Mining';
import UrbanPlanning from './industries/UrbanPlanning';
import Utilities from './industries/Utilities';
import RenewableEnergy from './industries/RenewableEnergy';
import GIS from './industries/GIS';
import RoadsRailways from './industries/RoadsRailways';
import OilGas from './industries/OilGas';
import '../Assets/CSS/Header.css';

const Industries = () => {
  return (
    <div>
      <Container fluid>
        <div>
          <img src={bgImage} alt='image' className='bg_image' />
          <p className='bg_name'>Industries</p>
        </div>
      </Container>
      <Element name="constructor">
        <Constuctor />
        <div>
          <img src={constructor} alt='image' className='constructor_image' />
        </div>
      </Element>
      <Element name="mining">
        <Mining />
      </Element>
      <Element name="urbanplanning">
        <Row className='urban_container'>
          <Col md="6">
            <UrbanPlanning />
          </Col>
          <Col md="6">
            <Utilities />
          </Col>
        </Row>
      </Element>
      <Element name="renewableenergy">
        <RenewableEnergy />
      </Element>
      <Element name="gis" className='mb-5'>
        <GIS />
      </Element>
      <Element name="roadsrailways">
        <RoadsRailways />
      </Element>
      <Element name="oilgas">
        <OilGas />
      </Element>
    </div>
  );
};

export default Industries;
