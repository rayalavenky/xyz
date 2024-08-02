import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import trackinspection from '../../Assets/Images/trackinspection.png'
import terrainmap from '../../Assets/Images/terrainmap.png'
import monitorroad from '../../Assets/Images/monitorroad.png'
import accident from '../../Assets/Images/accident.png'
import railways from '../../Assets/Images/railways.png'
import roadways from '../../Assets/Images/roadways.png'

const RoadsRailways = () => {
  return (
    <div>
      <Container fluid className='mining_container'>
      <Row>
        <Col md="4" className='px-5'>
        <p className='constr_head'>Roads & Railways</p>
        <h2 className='constr_head2'>Roads & Railways</h2>
        </Col>
        <Col md="8">
        <p className='constr_data'>We, at Drogo Drones, have optimised transport sector solution to identify route maps for new lines, project management and maintenance of existing lines based on DEM, DTM and 360 cameras.</p>
          <Row className='pt-5'>
            <Col md="2">
            <div>
              <img src={trackinspection} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Track Inspection</p>
            </Col>
            <Col md="2">
            <div>
              <img src={terrainmap} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Terrain Mapping</p>
            </Col>
            <Col md="2">
            <div>
              <img src={monitorroad} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Project Monitoring</p>
            </Col>
            <Col md="2">
            <div>
              <img src={accident} alt='image' className='constr_image'/>
            </div>
            <p className='constr_data'>Accident Response</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='pt-5'>
        <Col md="6">
        <h1>Railways</h1>
        <div>
            <img src={railways} alt=''/>
        </div>
        <p className='pt-5'>The lifelines of Indian travel, they are also often the causes for tragedy. With Drogo Drones, the incidence can be drastically reduced along with better new track placement selection.</p>
        </Col>
        <Col md="6">
        <h1>Roadways</h1>
        <div>
            <img src={roadways} alt=''/>
        </div>
        <p className='pt-4'>We are expanding at the rate of 30km/day. To keep up the pace, adoption of technology is the key. Drogo Drones will aid you at every stage of the process, to ensure smooth progress.</p>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default RoadsRailways
