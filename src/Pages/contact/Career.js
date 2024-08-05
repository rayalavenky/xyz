import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import career from "../../Assets/contact/career.jpg";

const Career = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="career_container">
      <Container>
        <Row>
          <Col md={6} className="px-5">
            <div>
              <img src={career} alt="" className="pt-5" />
            </div>
          </Col>
          <Col md={6}>
            <h1>
              Wish to build a career{" "}
              <div>
                with <span className="text-primary">Drogo Drones</span>
              </div>
            </h1>
            <h5 className="pt-4">
              Provide your information and our team shall reach you
            </h5>
            <Container>
              <Row>
                <Col>
                  <div className="radio">
                    <label className="career_radio1">
                      <input
                        type="radio"
                        value="option1"
                        checked={selectedOption === "option1"}
                        onChange={handleOptionChange}
                        
                      />
                      Drone pilots
                    </label>
                  </div>
                  <div className="radio">
                    <label className="career_radio1">
                      <input
                        type="radio"
                        value="option2"
                        checked={selectedOption === "option2"}
                        onChange={handleOptionChange}
                      />
                      Mechatronics
                    </label>
                  </div>
                </Col>
              </Row>
              <Row className="pt-4">
                <Col>
                  <input type="text" placeholder="Your Name" className="p-3" />
                </Col>
              </Row>
              <Row className="pt-4">
                <Col>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="p-3"
                  />
                </Col>
              </Row>
              <Row className="pt-4">
                <Col>
                  <input
                    type="number"
                    placeholder="Your Phone"
                    className="p-3"
                  />
                </Col>
              </Row>
              <Row className="pt-4">
                <Col>
                  <textarea
                    type="textarea"
                    placeholder="Your text"
                    className="p-3"
                  />
                </Col>
              </Row>
              <Row className="pt-4">
                <Col>
                  <input type="checkbox" className="p-2" />
                  <span className="fs-5 px-2">
                     By clicking submit, I agree to the terms & conditions and
                    privacy policy and I am giving my consent to receive update
                    through SMS/email
                  </span>
                </Col>
              </Row>
              <Row className="pt-4">
                <button className="button_sendMessage">
                  <span>Send Message</span>
                  <svg className="icon">
                    <use xlinkHref="#arrow"></use>
                  </svg>
                </button>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Career;
