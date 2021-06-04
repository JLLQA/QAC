import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "./ListingDisplay/Grid";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Search";

const ListingPage = () => {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const [q, setQ] = useState("");

    const qHandler = (e) => {
        setQ(e.target.value);
    };

    useEffect(() => {
        axios.get(`http://localhost:5000/movies`)
            .then((res) => {
                setData(res.data);
                console.log("listings page",data);
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
                <Searchbar query={q} queryFunction={qHandler}/>
                <Grid data={data} query={q}/>
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