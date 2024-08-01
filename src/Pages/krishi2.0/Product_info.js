import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import altitude from '../../Assets/krishi2.0/altitude.gif'
import flight_time from '../../Assets/krishi2.0/flight-time.gif'
import flying_range from '../../Assets/krishi2.0/flyingRange.gif'
import speedometer from '../../Assets/krishi2.0/speedometer.gif'
import spray_nozzle from '../../Assets/krishi2.0/spray-nozzle.gif'
import sprayEfficiency from '../../Assets/krishi2.0/sprayEfficiency.gif'
import spraySpeed from '../../Assets/krishi2.0/spraySpeed.gif'
import takeOffWeight from '../../Assets/krishi2.0/takeOffWeight.gif'
import tank from '../../Assets/krishi2.0/tank.gif'
import tap from '../../Assets/krishi2.0/tap.gif'


const Product_info = () => {
  return (
    <div>
      <Container fluid>
      <Row className='product_row'>
        <Col md="2">
        <div>
            <img src={speedometer} alt='image' className='info_krishi_image'/>
        </div>
        <p>Flying Speed</p>
        <h3>10 m/s</h3>
        </Col>
        <Col md="2" className='product_column'>
        <div>
            <img src={takeOffWeight} alt='image' className='info_krishi_image'/>
        </div>
        <p>Take-off Weight</p>
        <h3>24.80kg</h3>
        </Col>
        <Col md="2" className='product_column'>
        <div>
            <img src={flying_range} alt='image' className='info_krishi_image'/>
        </div>
        <p>Flying Range</p>
        <h3>1000m</h3>
        </Col>
        <Col md="2" className='product_column'>
        <div>
            <img src={spraySpeed} alt='image' className='info_krishi_image'/>
        </div>
        <p>Spray Swath</p>
        <h3>3.3 - 3.5 m</h3>
        </Col>
        <Col md="2" className='product_column'>
        <div>
            <img src={tank} alt='image' className='info_krishi_image'/>
        </div>
        <p>Spray Tank</p>
        <h3>10 Lit</h3>
        </Col>
      </Row>
      <Row className='product_row'>
        <Col md="2" >
        <div>
            <img src={flight_time} alt='image' className='info_krishi_image'/>
        </div>
        <p>Endurance</p>
        <h3>15 min</h3>
        </Col>
        <Col md="2" className='product_column'>
        <div>
            <img src={altitude} alt='image' className='info_krishi_image'/>
        </div>
        <p>Operating Altitude</p>
        <h3>50ft</h3>
        </Col>
        <Col md="2" className='product_column'>
        <div>
            <img src={sprayEfficiency} alt='image' className='info_krishi_image'/>
        </div>
        <p>Spray efficiency</p>
        <h3>6min/1Acre</h3>
        </Col>
        <Col md="2" className='product_column'>
        <div>
            <img src={tap} alt='image' className='info_krishi_image'/>
        </div>
        <p>Spraying Flow</p>
        <h3>0.8-3 L/min</h3>
        </Col>
        <Col md="2" className='product_column'>
        <div>
            <img src={spray_nozzle} alt='image' className='info_krishi_image'/>
        </div>
        <p>Spray Nozzle</p>
        <h3>70 - 100 Micron</h3>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Product_info
