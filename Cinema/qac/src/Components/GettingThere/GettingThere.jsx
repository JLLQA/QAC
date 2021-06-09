import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import ContactMap from "../Multipage/Map";
import Cinema from './QACinemas.jpg';


const GettingThere = () => {
  document.title = "Getting There"

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <>
      <div id="dropped-box" className="container-fluid">
        <Container align='center'>
          <div>
            <h1>GETTING TO THE CINEMA</h1>
            <h5>Getting to the venue has never been easier!</h5>
            <p>With the following travel options, you can arrive at the location on time, etc</p>
            <img id="plan" src={Cinema} alt="basicplan"></img>
          </div>
          <br />
          <Container>
            <div>
              <Nav tabs>
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
                    <Col>
                      <ContactMap />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col>
                      <br />
                      <h2>PARKING</h2>
                      <br />
                      <h5>The nearest parking location is the NCP car park situated in 'Whitworth St, Manchester, M1 6NE' which is only a 5 minute (0.2 mile) walk away from the venue.</h5>
                      <br />
                      <h5>We advise pre-booking your parking here to make your travel to the venue much quicker and more economic.</h5>
                      <br />
                      <h5 id="highlight">
                        Early Bird discounts are available if you plan to park between 05:00AM-09:00AM, and if you do so, we recommend checking out the
                        <Link id="highlight"
                          to={{ pathname: `/places` }}>
                          "Places to Go"
                        </Link>section of the website to plan your day.</h5>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Col>
                      <br />
                      <h2>TRAIN STATION</h2>
                      <br />
                      <h5>The Manchester Oxford Road Station is located in 'Manchester Oxford Road station, Station Approach, Oxford Road, Manchester, Greater Manchester, M1 6FU' and is only a 2 minute walk away from the venue</h5>
                      <br />
                      <h5>Alternatively, if you plan on arriving at the Manchester Piccadilly station located in 'Manchester Piccadilly, Piccadilly Station Approach, Manchester M60 7RA', it would take an approximately 10-15 minute walk to the venue.</h5>
                      <br />
                      <h5 id="highlight"> We advise pre-booking your train tickets early and to be aware of the station opening and closing times.</h5>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="4">
                  <Row>
                    <Col>
                      <br />
                      <h2>BUS TRAVEL</h2>
                      <br />
                      <h5>The Manchester city area has buses available frequently, with the nearest being 5 minutes away from the venue.</h5>
                      <br />
                      <h5 id="highlight"> We advise pre-booking your bus tickets early and to be aware of the station opening and closing times.</h5>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="5">
                  <Row>
                    <Col>
                      <br />
                      <h2>Travel by Goose</h2>
                      <br />
                      <h5 id="highlight">
                        Our staff are currently training the geese, alas to no success.
                        <br />
                        The geese are currently rebelling and we hope to restart this service as soon as we have the situation under control.
                      </h5>
                    </Col>
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
