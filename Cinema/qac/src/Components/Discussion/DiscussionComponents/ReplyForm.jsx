import { Col, Form } from "reactstrap";

const ReplyForm = (props) => {
    const { username, body, handleSubmitReply, handleUsername, handleBody } = props;
    console.log(username);

    return (
        <Col align="center">
            <Form>
                <input type="text" name="username_reply" id="username_reply" placeholder="Username" value={username} onChange={(e)=>handleUsername(e.target.value)} />
                <br />
                <input type="text" name="topic_body_reply" id="topic_body_reply" placeholder="Topic Body" value={body} onChange={(e) => handleBody(e.target.value)} />
                <br />
                <button id="submitButton" onClick={handleSubmitReply} type="submit">Submit Reply</button>
                <br />
            </Form>
        </Col>
    )
}

export default ReplyForm;