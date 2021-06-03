import { Col, Container, Row } from "reactstrap";

const ExpandedDiscussion = (props) => {
    const {comments,title,body,username} = props
    return(
        <Container>
            <Row>

            </Row>
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