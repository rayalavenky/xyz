import React from 'react'
import stockpile from '../../Assets/Images/stockpile1.png'
import operations from '../../Assets/Images/operations1.png'
import monitormine from '../../Assets/Images/monitormine1.png'
import terrain from '../../Assets/Images/terrain1.png'
import eia from '../../Assets/Images/eia1.png'
import reclaim from '../../Assets/Images/closure1.png'
import mining from '../../Assets/Images/mining.png'
import { Col, Container, Row } from 'reactstrap'

const Mining = () => {
  return (
    <div>
      <Container fluid className='mining_container'>
      <Row>
        <Col md="4" className='px-5'>
        <p className='constr_head'>MINING</p>
        <h2 className='constr_head2'>MINING</h2>
        </Col>
        <Col md="8">
        <p className='constr_data'>We, at Drogo Drones, offer a true integrated solution. This includes site survey maps, construction plans, project site monitoring and surveillance, deviation detection, inventory management.</p>
          <Row className='mt-5'>
            <Col md="2">
            <div>
              <img src={stockpile} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Stockpile Management</p>
            </Col>
            <Col md="2">
            <div>
              <img src={operations} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Operations</p>
            </Col>
            <Col md="2">
            <div>
              <img src={monitormine} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Monitoring & Surveillance</p>
            </Col>
            <Col md="2">
            <div>
              <img src={terrain} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Terrain Modelling</p>
            </Col>
            <Col md="2">
            <div>
              <img src={eia} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>EIA</p>
            </Col>
            <Col md="2">
            <div>
              <img src={reclaim} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Reclaim</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <div>
      <img src={mining} alt='image' className='mining_image'/>
    </div>
    </Container>
    </div>
  )
}

export default Mining
