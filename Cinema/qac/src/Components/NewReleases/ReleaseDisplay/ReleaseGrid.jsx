import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import ReleaseTableRow from "./ReleaseTableRow";
import Searchbar from "../../Searchbar/Search";

const ReleaseGrid = ({ data }) => {
    const [ready, setReady] = useState(false);
    const [objArray, setObjArray] = useState([]);

    const [q, setQ] = useState("");

    const qHandler = (e) => {
        setQ(e.target.value);
    };

    useEffect(() => {
        let array = [];

        while (data.length) {
            array.push(data.splice(0,2));
        }

        setObjArray(array);
        setReady(true);
    }, []);

    if (ready) {
        return (
            <div id="dropped-box" className="container-fluid">
                <Container align="center">
                    <h1>NEW RELEASES</h1>
                    <h3> Upcoming Movie Releases</h3>
                    <Searchbar query={q} queryFunction={qHandler} />
                    <table id="img-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {objArray.map((two, i) => (
                                <tr key={i}>
                                    <ReleaseTableRow objects={two} query={q} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br /><p>Coming soon to QACinemas...</p>
                </Container>
            </div>
        );
    }
    else {
        return (
            <h1> Loading... </h1>
        );
    }
}

export default ReleaseGrid;