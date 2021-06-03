import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Navbar from "../Navbar/Navbar";
import Map from "./GettingThereComponents/Map";


const GettingThere = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
      <>
      <Navbar/>
      <br/>

      <div align='center'>
      {/* <Jumbotron align='center'> */}
        <h1 className="display-3"style={{ color: 'white' }} >Getting to the Cinema!</h1>
        <p className="lead"style={{ color: 'white' }} >Getting to the venue has never been easier!</p>
        <hr className="my-2" />
        <p style={{ color: 'white' }} >With the following travel options, you can arrive at the location on time, etc</p>
        <p className="lead">
          <Button color="primary" >Learn More</Button>
        </p>
      {/* </Jumbotron> */}
    </div>
    <br/>
   

    <div >
      <Nav tabs align='center'>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            More Tabs
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Tab 1 Contents</h4>
              <Map />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
    </>
  );
}

export default GettingThere;
