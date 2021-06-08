import Navbar from "../../Multipage/Navbar/Navbar"
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import ReplyForm from "./ReplyForm";

const ExtraDetails = () => {
    //axios get request using id
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState();

    const [username, setUsername] = useState("");
    const [body, setBody] = useState("");
    const [refresh, setRefresh] = useState(false);

    const { title } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/topics/${title}`)
            .then((res) => {
                console.log(res);
                setData(res.data);
                setIsLoaded(true);
            }).catch((err) => {
                console.log(err.message);
                setIsLoaded(true);
            })
    }, [refresh])

    const handleSubmitReply = (event) => {
        event.preventDefault();
        axios.patch(`http://localhost:5000/movies/topics/comment/${title}`,
            {
                username: username,
                body: body
            })
            .then((res) => {
                setRefresh((c) => !c);
            }).catch((err) => {
                console.log(err)
            })
    }



    const Filter = require("bad-words");
    const filter = new Filter();


    if (isLoaded) {
        if (data.comments.length > 0) {
            return (
                <>
                    <Navbar />
                    <div id="dropped-box" className="container-fluid">
                        <Container>
                            <Row>
                                <Col>
                                    <Card>
                                        <CardBody>
                                            <CardTitle tag="h5">{filter.clean(data.title)}</CardTitle>
                                            <CardSubtitle tag="h6">{filter.clean(data.username)}</CardSubtitle>
                                            <CardText>{filter.clean(data.body)}</CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <ReplyForm
                                    username={username}
                                    body={body}
                                    handleSubmitReply={handleSubmitReply}
                                    handleUsername={setUsername}
                                    handleBody={setBody}
                                />
                            </Row>
                            <br />
                            {data.comments.map((reply) => (
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
                        </Container>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <Navbar />
                    <div id="dropped-box" className="container-fluid">
                        <Container>
                            <Row>
                                <Col>
                                    <Card>
                                        <CardBody>
                                            <CardTitle tag="h5">{filter.clean(data.title)}</CardTitle>
                                            <CardSubtitle tag="h6">{filter.clean(data.username)}</CardSubtitle>
                                            <CardText>{filter.clean(data.body)}</CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <ReplyForm
                                    username={username}
                                    body={body}
                                    handleSubmitReply={handleSubmitReply}
                                    handleUsername={setUsername}
                                    handleBody={setBody}
                                />
                            </Row>
                            <br />
                        </Container>
                    </div>
                </>
            )
        }
    } else {
        return (
            <>
                <Navbar />
                <h1>Loading...</h1>
            </>
        )
    }
}

export default ExtraDetails;