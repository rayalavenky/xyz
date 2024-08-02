import React, { useState } from 'react'
import { Button, Col, Collapse, Container, Row } from 'reactstrap';

const faqData = [
    {
      question: "What is Remote Pilot License?",
      answer: "A remote pilot license is equivalent to a driver's license but is used for drones. This license grants you permission to fly a drone for commercial purposes in India."
    },
    {
      question: "Why do I need Drone Flying Training?",
      answer: "Drone pilot training helps you acquire the necessary drone flying skills and it is also a mandatory requirement to get a remote pilot license."
    },
    {
      question: "What type of Drone Remote Pilot License do we use?",
      answer: "CAT1 (VLOS). Which enables you to fly any DGCA-approved drone."
    },
    {
      question: "What are the eligibility criterias to apply for a remote pilot license?",
      answer: "You should be 18+ in age. Completed your 10th-grade education. Own a valid passport."
    },
    {
        question: "How long will my drone license be valid?",
        answer: "10 years from the day of receiving your certificate. After that, you can reapply again for a new certificate."
    },
    {
        question: "How many days is the training program?",
        answer: "The program is for 7 full days and will take place in our office, Tadepalli, Andhra Pradesh."
    },
    {
        question: "How do I apply?",
        answer: "Here's the application form for you to apply. We will reach out to you once you have filled this out and addressed any queries before you go ahead with your payment."
    },
    {
        question: "Where does the training take place?",
        answer: "DROGO DRONES PRIVATE LIMITED (RPTO), Service Road, NH16, Tadepalli, Andhra Pradesh 522501."
    },
    {
        question: "Is there an online version of the program?",
        answer: "No. Due to the nature of the training, the courses need to be conducted at a verified physical location only."
    }
  ];

const RPTOFAQ = () => {
    
    const [openIndex, setOpenIndex] = useState(null)
    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
  return (
    <Container fluid className="faq-container">
    <h2 className="text-center faq-title">FAQS</h2>
    <Row>
      <Col>
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggle(index)}>
              <h5>{faq.question}</h5>
              <Button color="link" className="faq-toggle-btn">
                {openIndex === index ? '∧' : '∨'}
              </Button>
            </div>
            <Collapse isOpen={openIndex === index}>
              <div className="faq-answer">{faq.answer}</div>
            </Collapse>
          </div>
        ))}
      </Col>
    </Row>
  </Container>
  )
}

export default RPTOFAQ
