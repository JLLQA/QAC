
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';

const TopicContainer = (props) => {
    const { data, query } = props
    const dummydata = [{ title: "asshole", body: "asshole", username: "asshole", id: 1 }, { title: "testtitle2", body: "testbody2", username: "testusername2", id: 2 }]
    const handleClick = (event) => {
        event.preventDefault();
    }
    const Filter = require("bad-words");
    const filter = new Filter();

    if (query.length > 0) {
        return (
            <Container align="center">
                {dummydata
                    .filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
                    .map((post) => (
                        <Row key={post.id}>
                            <Col>
                                <Card >
                                    <CardBody>
                                        <CardTitle tag="h5">{filter.clean(post.title)}</CardTitle>
                                        <CardSubtitle tag="h6">{filter.clean(post.username)}</CardSubtitle>
                                        <CardText>{filter.clean(post.body)}</CardText>
                                        <Link to={{ pathname: `/discussion/movie/${post.id}` }}>
                                            <h3>More</h3>
                                        </Link>
                                        <br />
                                    </CardBody>
                                </Card>
                                <br />
                            </Col>
                        </Row>
                    ))}
            </Container>
        )
    } else {
        return (
            // axios get request for all topic objects - map instead of dummy data
            <Container align="center">
                {dummydata.map((post) => (
                    <Row key={post.id}>
                        <Col>
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">{filter.clean(post.title)}</CardTitle>
                                    <CardSubtitle tag="h6">{filter.clean(post.username)}</CardSubtitle>
                                    <CardText>{filter.clean(post.body)}</CardText>
                                    <Link to={{ pathname: `/discussion/movie/${post.id}` }}>
                                        <h3>More</h3>
                                    </Link>
                                </CardBody>
                            </Card>
                            <br />
                        </Col>
                    </Row>
                ))}
            </Container>
        )
    }
}

export default TopicContainer;