import { Col, Form } from "reactstrap";

const TopicForm = (props) => {
    const { title, username, body, handleSubmitTopic, handleUsername, handleTitle, handleBody } = props;
    return (
        <Col align="center">
            <Form>
                <input type="text" name="topic_title" id="topic_title" placeholder="Topic Title" value={title} onChange={handleTitle} />
                <input type="text" name="username" id="username" placeholder="Username" value={username} onChange={handleUsername} />
                <input type="text" name="topic_body" id="topic_body" placeholder="Topic Body" value={body} onChange={handleBody} />
                <button onClick={handleSubmitTopic} type="submit">Create Topic</button>
            </Form>
        </Col>
    )
}

export default TopicForm;