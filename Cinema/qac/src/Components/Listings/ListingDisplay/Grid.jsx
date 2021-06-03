import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const Grid = ({ data, query }) => {
    const [ready, setReady] = useState(false);
    const [objArray, setObjArray] = useState([]);


    useEffect(() => {
        let array = [];
        let newarr = [];

        array[0] = (data);
        newarr[0] = array;


        setObjArray(newarr);
        setReady(true);
    }, []);

    if (ready) {
        return (
            <div id="dropped-box" className="container-fluid">
                <table id="img-table">
                    <thead>
                        <tr>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {objArray.map((ten, i) => (
                            <tr key={i}>
                                <TableRow objects={ten} query = {query}/>
                            </tr>
                        ))}
                    </tbody>
                </table>
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