import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, CardImg, CardBody, CardTitle, Container, CardSubtitle } from 'reactstrap';
import classnames from 'classnames';
import sreedhar from '../../Assets/Images/Sreedhar Dannapaneni.jpg'
import yashwanth from '../../Assets/Images/yeshwanth.jpeg'
import shiva from '../../Assets/Images/Shiv_Image.jpeg'
import murali from '../../Assets/Images/murali.jpg'

const CreativeTeam = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <Container>
        <div className="team-container">
      <h1>Creative Team</h1>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Our Team
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Mentors
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="4">
              <Card>
                <CardImg top width="100%" src={yashwanth} alt="Yashwanth Bonthu" />
                <CardBody className='card_title_team'>
                  <CardTitle tag="h5" className='p-3'>Yashwanth Bonthu</CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card>
                <CardImg top width="100%" src={sreedhar} alt="Sreedhar Dannapaneni" />
                <CardBody>
                  <CardTitle tag="h5" className='p-3'>Sreedhar Dannapaneni</CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card>
                <CardImg top width="100%" src={shiva} alt="Shivadhar Soma" />
                <CardBody>
                  <CardTitle tag="h5" className='p-3'>Shivadhar Soma</CardTitle>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="4">
              <Card>
                <CardImg top width="100%" src={murali} alt="Mentor Name" />
                <CardBody>
                  <CardTitle tag="h5" className='p-3'>Murali</CardTitle>
                  <CardSubtitle>Partner & Innovation Leader, PwC</CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
    </Container>
  );
}

export default CreativeTeam;
