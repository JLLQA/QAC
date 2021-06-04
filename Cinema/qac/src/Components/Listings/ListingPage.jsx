import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "./ListingDisplay/Grid";
import Navbar from "../Multipage/Navbar/Navbar";

const ListingPage = () => {
    
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const [q, setQ] = useState("");

    const qHandler = (e) => {
        setQ(e.target.value);
    };

    useEffect(() => {
        axios({
            method: "Get",
            url: "http://127.0.0.1:5000/movies",
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
                <Navbar />
                <Searchbar query={q} queryFunction={qHandler} />
                <Grid data={data} query={q} />
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