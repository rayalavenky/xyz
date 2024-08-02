import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import solar from '../../Assets/Images/solar.png'
import wind from '../../Assets/Images/wind.png'
import sitesolar from '../../Assets/Images/sitesolar1.png'
import monitorsolar from '../../Assets/Images/monitorsolar1.png'
import faultsolar from '../../Assets/Images/faultsolar1.png'
import thermasolar from '../../Assets/Images/thermalsolar1.png'
import sitewind from '../../Assets/Images/sitewind1.png'
import faultwind from '../../Assets/Images/faultwind1.png'


const RenewableEnergy = () => {
  return (
    <div>
        <Container fluid className='renewableEnergy_container'>
            <Row>
                <Col md="4">
                <p>RENEWABLE ENERGY</p>
                <h1 className='constr_head2'>Renewable Energy</h1>
                </Col>
                <Col md="8">
                <p className='constr_data pt-3'>Our Drogo Drones is customised to meet the needs your industry, be it Solar, Wind or Coastal. We offer automated fault detection with thermal/visual imaging, site identification, monitoring and maintenance.</p>
                </Col>
            </Row>
            <Row className='pt-5'>
                <Col md="6">
                <h1>Solar</h1>
                <img src={solar} alt='solar' className='energy_image'/>
                <Row className='pt-4'>
                    <Col md="2">
                    <div>
                    <img src={sitesolar} alt='' className='constr_image'/>
                    </div>
                    <p className='constr_data'>Site Inspection</p>
                    </Col>
                    <Col md="2">
                    <div>
                    <img src={monitorsolar} alt='' className='constr_image'/>
                    </div>
                    <p className='constr_data'>Monitoring</p>
                    </Col>
                    <Col md="2">
                    <div>
                    <img src={faultsolar} alt='' className='constr_image'/>
                    </div>
                    <p className='constr_data'>Fault Identification</p>
                    </Col>
                    <Col md="2">
                    <div>
                    <img src={thermasolar} alt='' className='constr_image'/>
                    </div>
                    <p className='constr_data'>Thermal Analysis</p>
                    </Col>
                </Row>
                </Col>
                <Col md="6">
                <h1>Wind</h1>
                <img src={wind} alt='wind' className='energy_image'/>
                <Row className='pt-5'>
                    <Col md="2">
                    <div>
                    <img src={sitewind} alt='' className='constr_image'/>
                    </div>
                    <p className='constr_data'>Site Mapping</p>
                    </Col>
                    <Col md="2">
                    <div>
                    <img src={faultwind} alt='' className='constr_image'/>
                    </div>
                    <p className='constr_data'>Fault Identification</p>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                <p className='mt-5'>We understand the constraints of this sunrise sector and have developed tailor made solutions to operational problems. Drogo Drones will ease the manpower crunch and operations cost.</p>
                </Col>
                <Col md="6">
                <p className='mt-5'>With our Drogo Drones, tower placement selection and maintenance can be done with precise data gathered by our drones.</p>
                </Col>
            </Row>

        </Container>
      
    </div>
  )
}

export default RenewableEnergy
