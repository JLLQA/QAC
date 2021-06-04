import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import Searchbar from "../../Searchbar/Search";
import { Container } from "reactstrap";


const Grid = ({ data }) => {
    const [ready, setReady] = useState(false);
    const [objArray, setObjArray] = useState([]);

    const [q, setQ] = useState("");

    const qHandler = (e) => {
        setQ(e.target.value);
    };

    useEffect(() => {
        let array = [];
        // let newarr = [];

        array[0] = (data);
        // newarr[0] = array;


        setObjArray(array);
        setReady(true);
    }, []);

    if (ready) {
        return (
            <div id="dropped-box" className="container-fluid">
                <Container align="center">
                    <h1>LISTINGS</h1>
                    <Searchbar query={q} queryFunction={qHandler} />
                    {console.log(objArray)}
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
                                    <TableRow objects={two} query={q} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
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

export default Grid;


