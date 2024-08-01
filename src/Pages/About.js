import React from 'react'
import bg from '../Assets/Images/bg2.jpg'
import { Container } from 'reactstrap'
import AboutDrone from './about/AboutDrone'

const About = () => {
  return (
    <div>
      <Container fluid>
      <div>
        <img src={bg} alt='image' className='About_image'/>
        <p className='bg_name'>AboutUs</p>
      </div>
    </Container>
    <div className='aboutDrone_container'>
      <AboutDrone/>
    </div>
    </div>
  )
}

export default About