import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import RatingU from './Classifications/RatingU';
import RatingPG from './Classifications/RatingPG';
import Rating12 from './Classifications/Rating12';
import Rating12A from './Classifications/Rating12A';
import Rating15 from './Classifications/Rating15';
import Rating18 from './Classifications/Rating18';
import RatingR18 from './Classifications/RatingR18';

const Classification = () => {
    return (
        <div id="dropped-box" className="container-fluid">
            <Container align="center">
                <h1>CLASSIFICATION</h1>
                <p>
                    The film classification system in the UK is dictated by the rating system provided by the British Board of Film Classification (BBFC).
                    The BBFC has been rating the motion pictures and home video since as early as 1912 and their ratings are comprised of 7 categories.
                    These catagories and their guidelines are displayed and described below.
                </p>
                <br />
                <Row>
                    <Col sm="6">
                        <RatingU />
                    </Col>
                    <Col sm="6">
                        <RatingPG />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm="6">
                        <Rating12A />
                    </Col>
                    <Col sm="6">
                        <Rating12 />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm="6">
                        <Rating15 />
                    </Col>
                    <Col sm="6">
                        <Rating18 />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm="6">
                        <RatingR18 />
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Classification;