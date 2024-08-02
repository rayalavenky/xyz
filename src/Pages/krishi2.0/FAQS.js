import React, { useState } from 'react'
import { Button, Col, Collapse, Container, Row } from 'reactstrap';

const faqData = [
    {
      question: "Does the Government of India allow the use of drones for agriculture?",
      answer: "The Ministry of Agriculture and Farmers Welfare actively promotes and supports the utilization of drones as the future technology for pesticide spraying. They encourage and facilitate cooperative use, aiming to make drones widely accessible to farmers across the country. Additionally, the integration of drones into the agriculture insurance system is anticipated to address and mitigate potential damages and losses."
    },
    {
      question: "What is the SOP for drones laid down by the Government of India?",
      answer: "The standard operating procedure (SOP) for regulating drone usage in pesticide application encompasses various crucial elements. These include legal provisions, permissions for flying, restrictions on area distance and weight classification, limitations on operation in crowded areas, drone registration, safety insurance requirements, certifications for drone pilots, formulation of operation plans, designation of air flight zones, considerations for weather conditions, guidelines for pre-operation, post-operation, and in-operation procedures, as well as an emergency handling plan. The detailed document issued by the Government of India (GoI) can be obtained upon request."
    },
    {
      question: "Do Drogo Drones comply with government regulations?",
      answer: "Indeed, Drogo Drones adheres fully to government regulations and guidelines, ensuring 100% compliance."
    },
    {
      question: "Why should we use drones when the power sprayer works fine?",
      answer: "Drone-based spraying offers superior effectiveness, efficiency, and speed in comparison to manual spraying techniques. It is considered the cleanest and safest method, operating on green energy. Moreover, it significantly reduces the consumption of pesticides, insecticides, plant growth stimulators, and bioagents by up to 40% to 80%."
    },
    {
        question: "How does a spray on top reach the bottom of the leaves where pests/insects reside?",
        answer: "The utilization of drones for spraying induces air turbulence, effectively enabling the spraying liquid to reach and cover nearly all parts of the plant."
    },
    {
        question: "How is the consumption of pesticides reduced by drone’s vs manual spraying?",
        answer: "Drones disperse pesticides as fine particles, in contrast to the larger quantities used in manual spraying, resulting in reduced pesticide consumption."
    },
    {
        question: "What is the difference between battery-operated and hybrid drones?",
        answer: "Battery-operated drones require frequent battery replacements and recharging. On the other hand, hybrid drones eliminate this need, but they do incur recurring costs for fuel, such as petrol, which is used to power them."
    },
    {
        question: "Will drone spraying work for all kinds of crops?",
        answer: "Certainly! Virtually any crop or plantation, including paddy, wheat, sugarcane, turmeric, cotton, tomato, onion, and more, can benefit from the application of drones."
    }
  ];

const FAQS = () => {
    
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

export default FAQS
