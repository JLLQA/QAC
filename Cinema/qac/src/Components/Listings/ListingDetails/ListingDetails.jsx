import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import Navbar from "../../Navbar/Navbar";
import Showtimes from "./Showtimes"

const ListingPage = () => {

    const { id } = useParams();

    var NEWURL = `http://www.omdbapi.com/?i=${id}&apikey=14ff12ef`

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

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
            <>
                <Navbar />
                <br></br>
                <Container>
                    <div>
                        <h1>{data.Title}</h1>
                        <h2>{data.Director}</h2>
                        <h3>{data.Actors}</h3>
                    </div>
                </Container>
                <Container className = "showtimes">
                    <Showtimes
                        data = {data}/>
                </Container>
            </>
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