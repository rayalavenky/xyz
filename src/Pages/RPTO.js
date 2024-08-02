import React from 'react'
import rpto_bg from '../Assets/RPTOImages/RPTO2.jpg'
import AboutRPTO from './RPTOFolder.js/AboutRPTO'
import Enroll from './RPTOFolder.js/Enroll'
import Syllabus from './RPTOFolder.js/Syllabus'
import RPTOFAQ from './RPTOFolder.js/RPTOFAQ'

const RPTO = () => {
  return (
    <div>
      <img src={rpto_bg} alt='' className='rpto_bg'/>
      <div className='bg_data'>
      <h1 className='rpto_head'>REMOTE PILOT TRAINING <div>ORGANISATION (RPTO)</div></h1>
      <h3 className='rpto_desc'>Experience The Thrill Of Flying Drones <div>Turn your passion into a career</div></h3>
      </div>
      <div className='aboutrptoContainer'>
        <AboutRPTO/>
      </div>
      <div>
        <Enroll/>
      </div>
      <div>
        <Syllabus/>
      </div>
      <div>
        <RPTOFAQ/>
      </div>
    </div>
  )
}

export default RPTO