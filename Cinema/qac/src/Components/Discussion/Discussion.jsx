import { useEffect, useState } from "react";
import { Col, Container, Form, Nav, Row } from "reactstrap"
import axios from "axios";
import Navbar from "../Navbar/Navbar"
import SearchForm from "./DiscussionComponents/SearchForm";
import TopicContainer from "./DiscussionComponents/TopicContainer";
import TopicForm from "./DiscussionComponents/TopicForm";

const Discussion = () => {
    const [query, setQuery] = useState("");
    const [title, setTitle] = useState("");
    const [username, setUsername] = useState("");
    const [body, setBody] = useState("");

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
        console.log(title);
        console.log(username);
        console.log(body);
        //axios request to create a new discussion object using states
    }

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=14ff12ef`)
            .then((res) => {
                setData(res.data);
                setIsLoaded(true);
            }).catch((err) => {
                console.log(err.message);
                setIsLoaded(true);
            });
    }, []);

    if (isLoaded) {
        return (
            <div>
                <Navbar />
                <Container align="center">
                    <h1 style={{ color: "White" }}>Discussion</h1>
                    <Row>
                        <Col align="center">
                            <SearchForm
                                handleSubmitSearch={handleSubmitSearch}
                                query={query}
                            />
                        </Col>
                    </Row>
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
                </Container>
                <TopicContainer
                    data = {data}
                />
            </div>
        )
    } else {
        return(
            <>
            <Navbar/>
            <h1>SOMETHING WRONG</h1>
            </>
        )

    }
}



export default Discussion;