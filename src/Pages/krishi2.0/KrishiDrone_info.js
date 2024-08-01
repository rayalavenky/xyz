import React from 'react'
import { Col, Row } from 'reactstrap'
import krishiDrone_image from '../../Assets/Images/krishiDrone.png'

const KrishiDrone_info = () => {
  return (
    <div>
        <h1 className='text-center text-primary'>Krishi 2.0</h1>
      <Row>
        <Col md="6">
            <p className='krishi_desc'>Drogo’s Agricultural drone is a versatile unmanned aerial vehicle designed for dual-purpose spraying of fertilizers and pesticides in agricultural fields. It is equipped with a 10 kg payload capacity and can spray 1.5 acres of land in a single flight,making it highly efficient for large-scale farming operations. The drone has a maximum range of 1000m and is constructed with lightweight carbon-fiber material, making it easy to maneuver in the field. With a dry weight of 14.9 kg, the drone has an endurance 15 minutes. Overall, the Drogo’s Agricultural drone offers a reliable and efficient solution for precision agriculture and is capable of significantly reducing the time and labor required for crop spraying operations while minimising chemical exposure to farmers.</p>
        </Col>
        <Col md="6">
            <img src={krishiDrone_image} alt=''/>
        </Col>
      </Row>
    </div>
  )
}

export default KrishiDrone_info
