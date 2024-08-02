import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const AboutTeam = () => {
  return (
    <div>
      <Container>
        <Row>
        <Col md={6} className="about-section">
          <h6 className="text-muted">ABOUT</h6>
          <h2>Creative Team</h2>
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutTeam
