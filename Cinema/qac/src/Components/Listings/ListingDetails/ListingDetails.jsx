import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container } from "reactstrap";
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
                            <h1 key = {data.id}>{data.title}</h1>
                            <h3 className="Genre">Genre - {data.genre}</h3>
                            <h3>Year - {data.year}</h3>
                            <h3>Synopsis - {data.synopsis}</h3>
                            <br />
                            <Container className="showtimes">
                                <Showtimes data={data} />
                            </Container>
                            <br />
                        </div>
                    </Container>
                </div>
                <Link to={{
                    pathname: `/movie/review/${data.id}`
                }}>Reviews</Link>
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