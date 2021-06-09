import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom"
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



    if (isLoaded) {
        return (
            <div>
                <br></br>
                <div id="dropped-box" className="container-fluid">
                    <Container>
                        <div>
                            <h1 key={data.id}>{data.title}</h1>
                            <Row>
                                <Col>
                                    <h3 className="directors">Genre</h3>
                                    <h4 key={data.id}>- {data.genre}</h4>
                                    <h3>Year</h3>
                                    <h4 key={data.id}>- {data.year}</h4>
                                    <br />
                                </Col>
                                <Col align="right">
                                    <Link id="reviewButton" to={{
                                        pathname: `/movie/review/${data.id}`
                                    }}>Reviews</Link>
                                </Col>
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