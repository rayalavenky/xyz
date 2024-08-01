import React from 'react'
import urban from '../../Assets/Images/urban.png'
import { Col, Container, Row } from 'reactstrap'
import compliance from '../../Assets/Images/compliance1.png'
import traffic from '../../Assets/Images/traffic1.png'
import drain from '../../Assets/Images/drain1.png'
import water from '../../Assets/Images/water1.png'


const UrbanPlanning = () => {
  return (
    <div>
      <Container >
      <div>
        <img src={urban} alt='urbanImage'/>
      </div>
      <div className='urban_data'>
        <h1 className='pb-5'>Urban Planning</h1>
        <Container>
        <Row>
            <Col md="6">
            <div>
            <img src={compliance} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Regulatory Compliance Surveys</p>
            </Col>
            <Col md="6">
            <div>
            <img src={traffic} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Traffic Management Solutions</p>
            </Col>
        </Row>
        <Row className='mt-2'>
            <Col md="6">
            <div>
            <img src={drain} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Drain Planning</p>
            </Col>
            <Col md="6">
            <div>
            <img src={water} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Water Management Solution</p>
            </Col>
        </Row>
        <Row>
            <Col md="12">
            <p className='mt-4'>Our Drogo Drones is must needed tool for smart city projects. We perform multiple roles in urban planning process like assessing Regulatory Compliance, managing traffic, planning integrated drain and water systems.</p>
            </Col>
        </Row>
        </Container>
      </div>
      </Container>
    </div>
  )
}

export default UrbanPlanning
