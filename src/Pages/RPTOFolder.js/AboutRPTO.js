import React from "react";
import { Col, Container, Row } from "reactstrap";
import book from '../../Assets/RPTOImages/book.gif'
import social_care from '../../Assets/RPTOImages/social-care.gif'
import stairs from '../../Assets/RPTOImages/stairs.gif'
import university from '../../Assets/RPTOImages/university.gif'

const AboutRPTO = () => {
  return (
    <div className="aboutRPTO">
      <div>
        <h3 className="text-center text-primary aboutRPTO_head">About Remote Pilot Training Organisation</h3>
        <p className="aboutRPTO_desc">
          Introducing the first private RPTO in the stae of Andhra Pradesh,
          Drogo offers a 7-Day Remote Pilot Certificate (RPC) course. Our RPC
          course is designed to provide aspiring drone pilots with the necessary
          skills and knowledge to pursue their careers in the drone industry.
          The course covers both on-field and off-field syllabus and is
          conducted in our 50 acres state-of-the-art training facility in
          Tadepalli, Andhra Pradesh. The curriculum has been designed as per
          DGCA guidelines that includes a wide range of topics, including the
          basics of drone technology, principles of flight, drone operations,
          regulations and safety guidelines, and practical training on how to
          fly a drone. We have designed the course to be comprehensive and
          challenging, providing our students with an in-depth understanding of
          the drone industry and its applications.
        </p>
      </div>
      <div className="about_subimages">
        <Container>
        <Row>
            <Col md="3">
            <div>
                <img src={stairs} alt="" className="aboutrpto_image"/>
            </div>
            <h3 className="pt-5">Your first
            Big step</h3>
            </Col>
            <Col md="3">
            <div>
                <img src={social_care} alt="" className="aboutrpto_image"/>
            </div>
            <h3 className="pt-5">End-to-end Guidance</h3>
            </Col>
            <Col md="3">
            <div>
                <img src={book} alt="" className="aboutrpto_image"/>
            </div>
            <h3 className="pt-5">Best-in-class Education</h3>
            </Col>
            <Col md="3">
            <div>
                <img src={university} alt="" className="aboutrpto_image"/>
            </div>
            <h3 className="pt-5">Industry-leading Training facility</h3>
            </Col>
        </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutRPTO;
