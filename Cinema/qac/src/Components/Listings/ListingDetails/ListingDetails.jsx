import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import Navbar from "../../Navbar/Navbar";
import Showtimes from "./Showtimes"

const ListingPage = () => {
    
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { id } = useParams();

    var NEWURL = `http://www.omdbapi.com/?i=${id}&apikey=14ff12ef`

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
                            <h1>{data.Title}</h1>
                            <h3 className="directors">DIRECTORS</h3>
                            <h4>{data.Director}</h4>
                            <h3>ACTORS</h3>
                            <h4>{data.Actors}</h4>
                            <Container className="showtimes">
                                <Showtimes data={data} />
                            </Container>
                            <br/>
                        </div>
                    </Container>
                </div>
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