import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import Navbar from "../../Multipage/Navbar/Navbar";
import Showtimes from "./Showtimes"
import { Link } from "react-router-dom"
 
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
                <Navbar />
                <br></br>
                <div id="dropped-box" className="container-fluid">
                    <Container>
                        <div>
                            <h1 key = {data.id}>{data.title}</h1>
                            <h3 className="directors">Genre</h3>
                            <h4 key = {data.id}>- {data.genre}</h4>
                            <h3>Year</h3>
                            <h4 key = {data.id}>- {data.year}</h4>
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
                <Navbar />
                <h1>Loading...</h1>
            </div>
        );
    }
}

export default ListingPage;