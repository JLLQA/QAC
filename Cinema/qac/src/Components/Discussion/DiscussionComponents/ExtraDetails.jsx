import Navbar from "../../Multipage/Navbar/Navbar"
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';

const ExtraDetails = () => {
    //axios get request using id
    const dummydata = { title: "testtitle", body: "asshole", username: "testusername", id: 1, replies: [{ username: "asshole", body: "testreply" }, { username: "testreply2", body: "testreply2" }] };
    const Filter = require("bad-words");
    const filter = new Filter();
    return (
        <>
            <Navbar />
            <div id="dropped-box" className="container-fluid">
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
                    <br />
                    {dummydata.replies.map((reply) => (
                        <Row>
                            <Col>
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">{filter.clean(reply.username)}</CardTitle>
                                        <CardText>{filter.clean(reply.body)}</CardText>
                                    </CardBody>
                                </Card>
                                <br />
                            </Col>
                        </Row>
                    ))}
                </Container>s
            </div>
        </>
    )
}

export default ExtraDetails;