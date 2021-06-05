import axios from "axios";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import Navbar from "../../Multipage/Navbar/Navbar";
import Showtimes from "./Showtimes"

const ListingPage = () => {
    
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // const { id } = useParams();

    var NEWURL = `http://127.0.0.1:5000/movies`

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

    let newdata = data[0];

    if (isLoaded) {
        return (
            <div>
                <Navbar />
                <br></br>
                <div id="dropped-box" className="container-fluid">
                    <Container>
                        <div>
                            {console.log(newdata)}
                            {console.log(newdata.genre)}
                            {console.log(newdata.actors)}
                            <h1 key = {newdata.id}>{newdata.title}</h1>
                            <h3 className="directors">DIRECTORS</h3>
                            <h4 key = {newdata.id+1}>{newdata.genre}</h4>
                            <h3>ACTORS</h3>
                            <h4 key = {newdata.id}>{newdata.actors}</h4>
                            <Container className="showtimes">
                                <Showtimes data={newdata} />
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