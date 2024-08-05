import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import partner from '../../Assets/contact/partner.jpg'

const Partner = () => {
  return (
    <div className='partner_container'>
      <Container>
        <Row>
            <Col md={6}>
                <h1>Partner with <span className='text-primary'>Us</span></h1>
                <h3>Lets work together if you are as enthusiastic as us.</h3>
                <h5 className='pt-4'>Provide your information and our team shall reach you</h5>
                    <Row className='pt-4'>
                        <Col md={6}>
                         <input type='text' placeholder='Your Name' className='p-3'/>
                        </Col>
                        <Col md={6}>
                        <input type='email' placeholder='Your Email' className='p-3 '/>
                        </Col>
                    </Row>
                    <Row className='pt-4'>
                        <Col>
                            <input type='number' placeholder='Your Phone' className='p-3'/>
                        </Col>
                    </Row>
                    <Row className='pt-4'>
                        <Col>
                        <textarea type='textarea' placeholder='Your text' className='p-3'/>
                        </Col>
                    </Row>
                    <Row className='pt-4'>
                        <Col>
                        <input type='checkbox' className='p-3'/>
                        <span className='fs-5'> By clicking submit, I agree to the terms & conditions and privacy policy and I am giving my consent to receive update through SMS/email</span>
                        </Col>
                    </Row>
                    <Row className='pt-4'>
                        <button className='button_sendMessage'>
                            <span>Send Message</span>
                            <svg className='icon'>
                                <use xlinkHref='#arrow'></use>
                            </svg>
                        </button>
                    </Row>
            </Col>
            <Col md={6}>
            <div>
                <img src={partner} alt='' className='pt-5'/>
            </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Partner
