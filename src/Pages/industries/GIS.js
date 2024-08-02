import React from 'react'
import { Container, Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image_1 from '../../Assets/Images/GIS_1.png';
import image_2 from '../../Assets/Images/GIS_2.png';
import image_3 from '../../Assets/Images/GIS_3.png'

const GIS = () => {
  return (
    <div>
      <div className="mt-5 p-5">
      <Container fluid>
      <Row>
        <Col md="6">
        <img src="https://trimediaee.com/wp-content/uploads/2018/05/bigstock-159056834.jpg" alt="image" className="GIS_image"/>
        </Col>
        <Col md="6">
        <div className="GIS_group">
          <h1>GIS Survey & Mapping</h1>
          <p className="GIS_Data">With the opening of mapping in India, this field is wide open for innovation. With Drogo Drones, we are ready to realize your vision for India maps</p>
          <Row>
            <Col md="6">
              <p className="GIS_Data"><img src={image_1} alt="" className="GIS_subimage"/> Cadastral Surveys</p>
              <p>Cadastral surveys are fundamental to maintaining organized and legally recognized records of land ownership and use.</p>
            </Col>
            <Col md="6">
              <p className="GIS_Data"><img src={image_2} alt="" className="GIS_subimage"/> Photogrammetry</p>
              <p>Photogrammetry is a versatile and powerful tool used across various industries to create precise and detailed representations of the physical world.</p>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <p className="GIS_Data"><img src={image_3} alt="" className="GIS_subimage"/> Orthomosaic Maps</p>
              <p>Orthomosaic maps are an essential tool in various fields that require precise, high-resolution, and up-to-date geographic information.</p>
            </Col>
          </Row>
        </div>
        </Col>
      </Row>
      </Container>
      </div>
    </div>
  )
}

export default GIS
