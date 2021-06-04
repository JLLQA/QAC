import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "./ListingDisplay/Grid";
import Navbar from "../Multipage/Navbar/Navbar";

const ListingPage = () => {
    
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=14ff12ef`)
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
                <Grid data={data}/>
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