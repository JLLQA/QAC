import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col, Nav
} from 'reactstrap';

const ExtraDetails = () => {
    //axios get request using id
    const dummydata = { title: "testtitle", body: "testbody", username: "testusername", id: 1, replies: [{ username: "testreply", body: "testreply" }, { username: "testreply2", body: "testreply2" }] };
    console.log(dummydata.replies);
    return (
        <>
        <Nav/>
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">{dummydata.title}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{dummydata.username}</CardSubtitle>
                            <CardText>{dummydata.body}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {dummydata.replies.map((reply) => (
                <Row>
                
                <Col>
                <Card>
                <CardBody>
                <CardTitle tag="h5">{reply.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{reply.username}</CardSubtitle>
                <CardText>{dummydata.body}</CardText>
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