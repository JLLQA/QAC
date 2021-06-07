import axios from "axios";
import { Col, Container, Row } from "reactstrap";

const ExpandedDiscussion = () => {
    return(
        <Container>
            <Row>
                {comments.map((comment) => {
                    <Col>
                        <h1>Username: {comment.username}</h1>
                        <h2>Comment: {comment.body}</h2>
                    </Col>
                })}
            </Row>
        </Container>
    )
}

export default ExpandedDiscussion;