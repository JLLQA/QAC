import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import Navbar from "../Navbar/Navbar";
import Map from "./GettingThereComponents/Map";

const GettingThere = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <>
      <Navbar />
      <div id="dropped-box" className="container-fluid">
        <Container>
          <div align='center'>
            <h1 className="display-3" style={{ color: 'white' }} >Getting to the Cinema!</h1>
            <p className="lead" style={{ color: 'white' }} >Getting to the venue has never been easier!</p>
            <p style={{ color: 'white' }} >With the following travel options, you can arrive at the location on time, etc</p>
          </div>
          <br />
          <Container>
            <div align='center'>
              <Nav tabs >
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => { toggle('1'); }}
                  >
                    Location
          </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => { toggle('2'); }}
                  >
                    Travel by Car
          </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '3' })}
                    onClick={() => { toggle('3'); }}
                  >
                    Travel by Train
          </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '4' })}
                    onClick={() => { toggle('4'); }}
                  >
                    Travel by Bus
          </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '5' })}
                    onClick={() => { toggle('5'); }}
                  >
                    Travel by Goose
          </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <br />
                      <h5 style={{ color: 'white' }}>The address of the venue is</h5>
                      <h3 style={{ color: '#ffe167' }}>8th Floor St James Buildings 79 Oxford Street Manchester M1 6FQ</h3>
                      <h5 style={{ color: 'white' }}>which can be located under 'QA Cinema' marker in the map below.</h5>
                      <br />
                      <Map />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="12" align='center'>
                      <br />
                      <h2 style={{ color: 'white' }}>PARKING</h2>
                      <br />
                      <h5 style={{ color: 'white' }}> The nearest parking location is the NCP car park situated in 'Whitworth St, Manchster, M1 6NE' which is only a 5 minute (0.2 mile) walk away from the venue.</h5>
                      <br /><h5 style={{ color: 'white' }}> We advise pre-booking your parking here to make your travel to the venue much quicker and more economic.</h5>
                      <br /><h5 style={{ color: 'white' }}> Early Bird discounts are available if you plan to park between 05:00AM-09:00AM, and if you do so, we reccommend checking out the 'Places to Go' section of the website to plan your day.</h5>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Col sm="12">
                      <br />
                      <h2 style={{ color: 'white' }}>TRAIN STATION</h2> <br />
                      <h5 style={{ color: 'white' }}> The Manchester Oxford Road Station is located in 'Manchester Oxford Road station, Station Approach, Oxford Road, Manchester, Greater Manchester, M1 6FU' and is only a 2 minute (0.1 mile) walk away from the venue</h5>
                      <br /><h5 style={{ color: 'white' }}>Alternatively, if you plan on arriving at the Manchester Piccadilly station located in 'Manchester Piccadilly, Piccadilly Station Approach, Manchester M60 7RA', it would take an approximately 10-15 minute walk to the venue.</h5>
                      <br /><h5 style={{ color: '#ffe167' }}> We advise pre-booking your train tickets early and to be aware of the station opening and closing times. </h5>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="4">
                  <Row>
                    <Col sm="12">
                      <br />
                      <h2 style={{ color: 'white' }}>BUS TRAVEL</h2> <br />
                      <h5 style={{ color: 'white' }}>The Manchester city area has buses available frequently, with the nearest being 5 minutes away from the venue. </h5>
                      <br /><h5 style={{ color: 'white' }}></h5>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="5">
                  <Row>
                    <container>
                      <Col sm="12" align='left'>
                        <br />
                        <h2 align='center' style={{ color: 'white' }}>Travel by Goose!</h2>
                        <br />
                        <h4 style={{ color: 'yellow' }}>Our staff are currently training the geese, alas to no success. <br />The geese are currently rebelling and we hope to restart this service as soon as we have the situation under control.</h4>
                      </Col>
                    </container>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default GettingThere;
