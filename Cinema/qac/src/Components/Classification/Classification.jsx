import Navbar from "../Multipage/Navbar/Navbar";

import React from 'react';
import {
  Card, CardImg, CardText,
  CardTitle, Row, Col, Button
} from 'reactstrap';

const Classification = () => {
    return (
        <>
            <Navbar />
<h1>Classification</h1>

<div id="dropped-box" className="container-fluid">
        <Row>
      <Col sm="6">
      <CardImg src="https://static.wikia.nocookie.net/rating-system/images/8/88/BBFC_U.svg" alt="U Universal - Suitable for all"></CardImg>
        <Card body>
          <CardTitle tag="h5">U Universal - Suitable for all</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button href="https://www.bbfc.co.uk/rating/u">Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
      <CardImg src="https://static.wikia.nocookie.net/rating-system/images/b/b5/BBFC_PG.svg" alt="PG Parental Guidance"></CardImg>
        <Card body>
          <CardTitle tag="h5">PG Parental Guidance</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button href="https://www.bbfc.co.uk/rating/pg">Go somewhere</Button>
        </Card>
      </Col>
    
      <Col sm="6">
      <CardImg src="https://static.wikia.nocookie.net/rating-system/images/8/87/BBFC_12A.svg" alt="12A – Suitable for 12 years and over"></CardImg>
        <Card body>
          <CardTitle tag="h5">12A – Suitable for 12 years and over</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button href="https://www.bbfc.co.uk/rating/12">Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
      <CardImg src="https://static.wikia.nocookie.net/rating-system/images/8/84/BBFC_12.svg" alt="12 – Suitable for 12 years and over"></CardImg>
        <Card body>
          <CardTitle tag="h5">12 – Suitable for 12 years and over</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button href="https://www.bbfc.co.uk/rating/12">Go somewhere</Button>
        </Card>
      </Col>
    
      <Col sm="6">
      <CardImg src="https://static.wikia.nocookie.net/rating-system/images/0/03/BBFC_15.svg" alt="15 – Suitable only for 15 years and over"></CardImg>
        <Card body>
          <CardTitle tag="h5">15 – Suitable only for 15 years and over</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button href="https://www.bbfc.co.uk/rating/15">Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
      <CardImg src="https://static.wikia.nocookie.net/rating-system/images/9/9f/BBFC_18.svg" alt="18 – Suitable only for adults"></CardImg>
        <Card body>
          <CardTitle tag="h5">18 – Suitable only for adults</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button href="https://www.bbfc.co.uk/rating/18">Go somewhere</Button>
        </Card>
      </Col>
    
    <Col sm="6">
        <CardImg src="https://static.wikia.nocookie.net/rating-system/images/9/90/BBFC_R18.svg" alt="R18 - To be shown only in specially licensed cinemas, or supplied only in licensed sex shops, and to adults only"></CardImg>
        <Card body>
          <CardTitle tag="h5">R18 - To be shown only in specially licensed cinemas, or supplied only in licensed sex shops, and to adults only</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button href="https://www.bbfc.co.uk/rating/r18">Go somewhere</Button>
        </Card>
      </Col>
    </Row>

    </div>
        </>
    );
};

export default Classification;