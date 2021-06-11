import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "./ListingDisplay/Grid";

const ListingPage = () => {
    document.title = "Movie Listings"

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios({
            method: "Get",
            url: "http://localhost:5000/movies",
            headers: { "Access-Control-Allow-Origin": "*"}
        })
            .then((resp) => {
                console.log(resp);
                setData(resp.data);
                setIsLoaded(true);
            })
            .catch((err) => {
                console.log(err.message);
                setIsLoaded(true);
            });
    }, []);

    if (isLoaded) {
        return (
            <div>
                <Grid data={data} />
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    } else {
        return (
            <div id="dropped-box" className="container-fluid">
                <h1>Loading...</h1>
            </div>
        );
    }
}

export default ListingPage;