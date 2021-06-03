
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

const TopicContainer = (props) => {
    const { data, query } = props

    const handleClick = (event) => {
        event.preventDefault();
    }

    if (query.length > 0) {
        <Container align="center">
            <Row>

                {data.filter(post => post.title.toLowerCase().includes(query.toLowerCase())).map((post) => (
                    <Col>
                        <Card key={post.id}>
                            <CardBody>
                                <CardTitle tag="h5">{post.title}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{post.username}</CardSubtitle>
                                <CardText>{post.body}</CardText>
                                <Link to="/discussion/movie">
                                    <Button onClick={handleClick}>More Details</Button>
                                </Link>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    } else {

        return (
            // axios get request for all topic objects - map 
            <Container align="center">
                <Row>
                    {data.map((post) => (
                        <Col>
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">Topic title</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Username</CardSubtitle>
                                    <CardText>Card body</CardText>
                                    <Button onClick={handleClick}>More Details</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }

}

export default TopicContainer;