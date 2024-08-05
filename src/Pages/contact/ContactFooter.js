import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";

const ContactFooter = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedService, setSelectedService] = useState('');

  const handleChangeIndustry = (event) => {
    setSelectedIndustry(event.target.value);
  };
  const handleChangeService = (event) => {
    setSelectedService(event.target.value);
  };
  return (
    <div className="contactFooter_container bg-dgray">
      <Container>
        <Row>
          <Col md={6} className="p-4 bg-white container_personalData">
            <h3>Personal Data</h3>
            <Container>
              <Row>
                <Col md={6}>
                  <input type="text" placeholder="Full name" className="p-3" />
                </Col>
                <Col md={6}>
                  <input type="email" placeholder="Email" className="p-3" />
                </Col>
              </Row>
              <Row className="pt-4">
                <Col md={6}>
                  <input type="number" placeholder="Phone" className="p-3" />
                </Col>
                <Col md={6}>
                  <input type="text" placeholder="Subject" className="p-3" />
                </Col>
              </Row>
            </Container>
            <h3 className="pt-3 pb-3">Request Details</h3>
            <Container>
              <Row>
                <Col md={6}>
                  <input
                    type="text"
                    placeholder="Organisation Name"
                    className="p-3"
                  />
                </Col>
                <Col md={6}>
                  <input type="email" placeholder="Location" className="p-3" />
                </Col>
              </Row>
              <Row className="pt-4">
              <Col md={6}>
                <select value={selectedIndustry} onChange={handleChangeIndustry} className="p-3">
                  <option value="">Select Industry</option>
                  <option value="option1">Solar</option>
                  <option value="option2">Wind</option>
                  <option value="option3">Oil & Gas</option>
                  <option value="option3">Transportaion</option>
                </select>
              </Col>
              <Col md={6}>
                <select value={selectedService} onChange={handleChangeService} className="p-3">
                  <option value="">Select Service</option>
                  <option value="option1">Site Survey</option>
                  <option value="option2">Monitoring</option>
                  {/* <option value="option3">Oil & Gas</option> */}
                  <option value="option3">Visual Tools</option>
                </select>
              </Col>
              </Row>
              <Row className="pt-4">
                <Col>
                  <input type="text" placeholder="Message" className="p-3"/>
                </Col>
              </Row>
              <Row className="pt-4">
                <Col>
                  <input type="checkbox" className="px-2" />
                  <span className="fs-5 px-2">
                    By clicking submit, I agree to the terms & conditions and
                    privacy policy and I am giving my consent to receive update
                    through SMS/email
                  </span>
                </Col>
              </Row>
              <Row className="pt-4">
                <button className="button_getquote">
                  Get a quote
                </button>
              </Row>
            </Container>
          </Col>
          <Col md={6} className="pt-5 px-5">
            <Container>
              <Row>
                <Col>
                  <div className="bg-blue p-5 mx-5 mb-3">
                    <h2>Registered Office</h2>
                    <p>
                      <span className="fw-bold">Location:</span> Plot No. 3 - 898, Sri Swamy Ayyappa
                      Cooperative Society, Road No. 1, Madhapur, Hyderabad -
                      500081.
                    </p>
                    <p>
                      <span className="fw-bold">Phone:</span> +91 7416060700
                    </p>
                    <p>
                      <span className="fw-bold">Email</span> info@drogodrones.com
                    </p>
                    <p>
                      <span className="fw-bold">Opening Hours:</span> 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="bg-blue p-5 mx-5 mt-4">
                    <h2>Communication Office</h2>
                    <p>
                      <span className="fw-bold">Location:</span> Plot No. 3 - 898, Sri Swamy Ayyappa
                      Cooperative Society, Road No. 1, Madhapur, Hyderabad -
                      500081.
                    </p>
                    <p>
                      <span className="fw-bold">Phone:</span> +91 7416060700
                    </p>
                    <p>
                      <span className="fw-bold">Email</span> info@drogodrones.com
                    </p>
                    <p>
                      <span className="fw-bold">Opening Hours:</span> 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactFooter;
