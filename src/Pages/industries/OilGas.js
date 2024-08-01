import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import line from '../../Assets/Images/line1.png'
import offshore from '../../Assets/Images/offshore.png'
import refinery from '../../Assets/Images/refinery.png'
import component from '../../Assets/Images/components1.png'
import oilngas from '../../Assets/Images/oilngas.png'


const OilGas = () => {
  return (
    <div>
      <Container fluid className='constructor'>
        <Row>
            <Col md="6">
            <h1 className='constr_head2 pb-3'>Oil & Gas</h1>
            <p className='constr_data'>Your rigs and lines will have improved security with our Drogo Drones at lower costs – be it off-shore or on-shore rig. We provide 99% accurate inspection reports eliminating human errors.</p>
            <Row className='pt-5'>
                <Col md="6">
                <div>
                <img src={line} alt='' className='constr_image'/>
                </div><p className='constr_data'>Line Maintenance</p>
                </Col>
                <Col md="6">
                <div>
                <img src={offshore} alt='' className='constr_image'/>
                </div><p className='constr_data'>Offshore Rigs</p>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                <div>
                <img src={refinery} alt='' className='constr_image'/>
                </div><p className='constr_data'>Refinery</p>
                </Col>
                <Col md="6">
                <div>
                <img src={component} alt='' className='constr_image'/>
                </div><p className='constr_data'>Components</p>
                </Col>
            </Row>
            </Col>
            <Col md="6">
            <div className='oilngas_image'>
                <img src={oilngas} alt='' />
            </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default OilGas
