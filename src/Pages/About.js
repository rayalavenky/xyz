import React from 'react'
import bg from '../Assets/Images/bg2.jpg'
import { Container } from 'reactstrap'
import AboutDrone from './about/AboutDrone'
import CreativeTeam from './about/CreativeTeam'

const About = () => {
  return (
    <div>
      <Container fluid>
      <div>
        <img src={bg} alt='image' className='About_image'/>
        <p className='bg_name'>About Us</p>
      </div>
    </Container>
    <div className='aboutDrone_container'>
      <AboutDrone/>
    </div>
    <div className='aboutTeam_container'>
      <CreativeTeam/>
    </div>
    </div>
  )
}

export default About