import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col, Nav
} from 'reactstrap';

const ExtraDetails = () => {
    //axios get request using id
    const dummydata = { title: "testtitle", body: "asshole", username: "testusername", id: 1, replies: [{ username: "asshole", body: "testreply" }, { username: "testreply2", body: "testreply2" }] };
    const Filter = require("bad-words");
    const filter = new Filter();
    return (
        <>
        <Nav/>
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                                <CardTitle tag="h5">{filter.clean(dummydata.title)}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{filter.clean(dummydata.username)}</CardSubtitle>
                                <CardText>{filter.clean(dummydata.body)}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {dummydata.replies.map((reply) => (
                <Row>
                
                <Col>
                <Card>
                <CardBody>
                <CardTitle tag="h5">{filter.clean(reply.username)}</CardTitle>
                <CardText>{filter.clean(reply.body)}</CardText>
                </CardBody>
                </Card>
                </Col>
                </Row>
            ))}

        </Container>
            </>
    )
}

export default ExtraDetails;