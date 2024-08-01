import React from 'react'
import geomapping from '../../Assets/Images/geomapping.png'
import monitor from '../../Assets/Images/monitorutility.png'
import thermal from '../../Assets/Images/thermalutility.png'
import fault from '../../Assets/Images/faultutility.png'
import utility from '../../Assets/Images/utilities.png'
import { Col, Container, Row } from 'reactstrap'

const Utilities = () => {
  return (
    <div>
      <Container >
      <div>
        <img src={utility} alt='urbanImage'/>
      </div>
      <div className='urban_data'>
        <h1 className='pb-5'>Utilities</h1>
        <Container>
        <Row>
            <Col md="6">
            <div>
            <img src={geomapping} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Geo-Mapping</p>
            </Col>
            <Col md="6">
            <div>
            <img src={monitor} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Monitoring</p>
            </Col>
        </Row>
        <Row className='mt-2'>
            <Col md="6">
            <div>
            <img src={thermal} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Thermal Imaging</p>
            </Col>
            <Col md="6">
            <div>
            <img src={fault} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Fault Identification</p>
            </Col>
        </Row>
        <Row>
            <Col md="12">
            <p className='mt-5'>Surveying the towers is time-consuming and laborious. With Drogo Drones, we reduce the reaction times, help with ERP and pre-empt massive failures.</p>
            </Col>
        </Row>
        </Container>
      </div>
      </Container>
    </div>
  )
}

export default Utilities
