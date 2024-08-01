import React from 'react'
import survey from '../../Assets/Images/survey1.png'
import monitor from '../../Assets/Images/monitor1.png'
import progress from '../../Assets/Images/progress1.png'
import stakeholder from '../../Assets/Images/stakeholder1.png'
import saas from '../../Assets/Images/saas1.png'
import { Col, Container, Row } from 'reactstrap'

const Constuctor = () => {
  return (
    <div>
      <Container fluid className='constructor'>
      <Row>
        <Col md="4">
          <p className='constr_head'>CONSTRUCTION</p>
          <h2 className='constr_head2'>CONSTRUCTION</h2>
        </Col>
        <Col md="8">
          <p className='constr_data'>We, at Drogo Drones, offer a true integrated solution. This includes site survey maps, construction plans, project site monitoring and surveillance, deviation detection, inventory management.</p>
          <Row className='mt-5'>
            <Col md="2">
            <div>
              <img src={survey} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Site Survey</p>
            </Col>
            <Col md="2">
            <div>
              <img src={monitor} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Site Monitoring</p>
            </Col>
            <Col md="2">
            <div>
              <img src={progress} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Progress Monitoring</p>
            </Col>
            <Col md="2">
            <div>
              <img src={stakeholder} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Stakeholder Management</p>
            </Col>
            <Col md="2">
            <div>
              <img src={saas} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>SAAS</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Constuctor
