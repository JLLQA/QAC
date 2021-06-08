import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap"
import axios from "axios";
import Navbar from "../Multipage/Navbar/Navbar"
import SearchForm from "./DiscussionComponents/SearchForm";
import TopicContainer from "./DiscussionComponents/TopicContainer";
import TopicForm from "./DiscussionComponents/TopicForm";

const Discussion = () => {
    const [query, setQuery] = useState("");
    const [title, setTitle] = useState("");
    const [username, setUsername] = useState("");
    const [body, setBody] = useState("");
    const [refresh,setRefresh] = useState(false);

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
                username:username,
                title:title,
                body:body
            })
            .then((res) =>{
                console.log(res)
                setRefresh((c)=>!c);
            }).catch((err)=> {
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
    },[refresh]);

    if (isLoaded) {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div id="dropped-box" className="container-fluid">
                    <Container align="center">
                        <h1>DISCUSSION BOARD</h1>
                        <Row>
                            <Col>
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
                        <Container>
                            <TopicContainer
                                data={data}
                                query={query}
                            />
                        </Container>
                    </Container>
                </div>
            </div>
        )
    } else {
        return (
            <>
                <Navbar />
                <h1>Loading...</h1>
            </>
        )

    }
}



export default Discussion;