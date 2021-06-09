import axios from "axios";
import { useEffect, useState } from "react";
import ReleaseGrid from "./ReleaseDisplay/ReleaseGrid";

const NewReleases = () => {
    document.title = "Upcoming Releases"

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        axios({
            method: "Get",
            url: "http://127.0.0.1:5000/newreleases",
            headers: { "Access-Control-Allow-Origin": "*" }
        })
            .then((resp) => {
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
                <ReleaseGrid data={data} />
            </div>
        );
    }
    else {
        return (
            <div id="dropped-box" className="container-fluid">
                <h1>Loading...</h1>
            </div>
        );
    }

}

export default NewReleases;