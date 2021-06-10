import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Col, Container, Row, Button } from "reactstrap";
import Showtimes from "./Showtimes"

const ListingPage = () => {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { id } = useParams();

    var NEWURL = `http://127.0.0.1:5000/movies/find/${id}`

    useEffect(() => {
        axios.get(NEWURL)
            .then((res) => {
                setData(res.data);
                setIsLoaded(true);
            }).catch((err) => {
                console.log(err.message);
                setIsLoaded(true);
            });
    }, []);

    var reviewUrl = `http://localhost:3000/movie/review/${data.id}`;

    if (isLoaded) {
        return (
            <div>
                <br />
                <div id="dropped-box" className="container-fluid">
                    <Container>
                        <div>
                            <h1 key={data.id}>{data.title}</h1>
                            <Row>
                                <Col>
                                    <h3>Director</h3>
                                    <h5 key={data.id}>{data.director}</h5>
                                </Col>
                                <Col>
                                    <h3>Genre</h3>
                                    <h5 key={data.id + 1}>{data.genre}</h5>
                                </Col>
                                <Col>
                                    <h3>Year</h3>
                                    <h5 key={data.id + 2}>{data.year}</h5>
                                </Col>
                                <Col align="right">
                                    <Button id="reviewButton" href={reviewUrl} type="button">
                                        Reviews
                                    </Button>
                                </Col>
                            </Row>
                            <br />
                            <Col>
                                <Row>
                                    <h3>Actors</h3>
                                </Row>
                                <Row>
                                    <br />
                                    <h5 key={data.id}>
                                        <ul>{data.actors.map((actor, i) => (
                                            <li key={i}>
                                                {actor.name}
                                            </li>
                                        ))}
                                        </ul>
                                    </h5>
                                </Row>
                            </Col>
                            <Row>
                                <h3>Synopsis</h3>
                                <h5 key={data.id + 3}>{data.synopsis}</h5>
                                <br />
                            </Row>
                            <Container className="showtimes">
                                <Showtimes data={data} />
                                <br />
                            </Container>
                            <br />
                        </div>
                    </Container>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
}

export default ListingPage;