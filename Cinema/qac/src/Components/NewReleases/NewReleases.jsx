import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Multipage/Navbar/Navbar";
import Release from "./Release";


const NewReleases = () => {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const [q, setQ] = useState("");

    const qHandler = (e) => {
        setQ(e.target.value);
    };

    useEffect(() => {
        axios({
            method: "Get",
            url: "http://127.0.0.1:5000/newreleases",
            headers: { "Access-Control-Allow-Origin": "*" }
        })
            .then((resp) => {
                // console.log(resp.data);
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
                {/* <h1>NEW RELEASES</h1> */}
                <div>
                        <Release data={data} query={q}/>  
                </div>
                
            </div>
        );
    }
    else {
        return (
            <div>
                <Navbar />
                <h1>Loading...</h1>
            </div>
        );
    }

}

export default NewReleases;