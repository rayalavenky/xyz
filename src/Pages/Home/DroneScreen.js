import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image_1 from '../../Assets/Images/GIS_1.png';
import image_2 from '../../Assets/Images/GIS_2.png';
import image_3 from '../../Assets/Images/GIS_3.png'
import pilot from '../../Assets/Images/Pilot pic.png'
import drone from '../../Assets/Images/drone2.jpeg';

const DroneScreen = () => {
  return (
    <div>
      <div className="mt-5">
      {/* <Container>
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
      </Container> */}
      </div>
      <div>
        <Container>
          <Row>
            <Col md="6">
              <img 
                src={pilot}
                alt="image"
                className="drone_operate_image"
              />
              <img src={drone} alt="image" className="drone_image"/>
            </Col>
            <Col md="6">
              <div className="drone_details">
                <h2 className="drone_title2">Highly skilled & licensed professionals delivering precise field spraying with agricultural drones.</h2>
                <p className="drone_desc">
                Plays a crucial role in modern farming by employing drone technology to enhance efficiency, precision, and productivity in crop management, monitoring, and spraying operations.
                </p>
              </div>
              <div>
                <Button className="getButton rounded-pill px-5 m-5">
                  Get Started
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        {/* <Container fluid>
          <Row className="bg-gray">
            <Col md="6" >
            <div className="drone_details1">
                <h6 className="drone_title2">Aerial Photography</h6>
                <p className="drone_desc">
                  We Are Licenced Drone Pilots &{" "}
                  <div>Aerial Photography Professionals</div>
                </p>
                <p>
                  Capturing the moments through photography preserve them
                  through time and holds them in memories. Drone photography can
                  provide a bird’s eye view. The production of elevation data
                  and orthomosaics.
                </p>
                
            <button className="btn btn-custom rounded-pill px-5">
              Get Started
            </button>
          
              </div>
            </Col>
            <Col md="6">
            <img src="https://purepng.com/public/uploads/large/purepng.com-white-flying-dronedronecameraflyingtechnologyspyingaction-211519338088vsjob.png" alt=""/>
            </Col>
          </Row>
        </Container> */}
      </div>
    </div>
  );
};

export default DroneScreen;
