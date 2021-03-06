import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap"
import axios from "axios";
import SearchForm from "./DiscussionComponents/SearchForm";
import TopicContainer from "./DiscussionComponents/TopicContainer";
import TopicForm from "./DiscussionComponents/TopicForm";

const Discussion = () => {
    document.title = "Discussion"

    const [query, setQuery] = useState("");
    const [title, setTitle] = useState("");
    const [username, setUsername] = useState("");
    const [body, setBody] = useState("");
    const [refresh, setRefresh] = useState(false);

    const handleSubmitSearch = (event) => {
        setQuery(event.target.value);
    }
    const handleTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
    const handleBody = (event) => {
        setBody(event.target.value);
    }

    const handleSubmitTopic = (event) => {
        event.preventDefault();
        axios.post("http://localhost:5000/movies/topics/create",
            {
                username: username,
                title: title,
                body: body
            })
            .then((res) => {
                console.log(res)
                setRefresh((c) => !c);
            }).catch((err) => {
                console.log(err.message);
            })
        //axios request to create a new discussion object using states
    }

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:5000/topics`)
            .then((res) => {
                setData(res.data);
                setIsLoaded(true);
            }).catch((err) => {
                console.log(err.message);
                setIsLoaded(true);
            });
    }, [refresh]);

    if (isLoaded) {
        return (
            <div>
                <div id="dropped-box" className="container-fluid">
                    <Container align="center">
                        <h1>DISCUSSION BOARD</h1>
                        <br />
                        <Row>
                            <Col>
                                <SearchForm
                                    handleSubmitSearch={handleSubmitSearch}
                                    query={query}
                                />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <TopicForm
                                title={title}
                                username={username}
                                body={body}
                                handleSubmitTopic={handleSubmitTopic}
                                handleUsername={handleUsername}
                                handleTitle={handleTitle}
                                handleBody={handleBody}
                            />
                        </Row>
                        <Container>
                            <TopicContainer
                                data={data}
                                query={query}
                            />
                        </Container>
                    </Container>
                </div>
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    } else {
        return (
            <div id="dropped-box" className="container-fluid">
                <h1>Loading...</h1>
            </div>
        )

    }
}

export default Discussion;