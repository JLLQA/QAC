import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const Grid = ({ data , query}) => {
    const [ready, setReady] = useState(false);
    const [objArray, setObjArray] = useState([]);

    console.log(query);

    // const filterQuery = (query) => (data) => data.Title.toLowerCase().includes(query.toLowerCase());


    useEffect(() => {
        let array = [];
        let newarr = [];
        let filteredData = [];

        array[0] = (data);
        newarr[0] = array;


        // filteredData = newarr.filter(filterQuery(query));

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
                                <TableRow objects={ten} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    } else {
        return (
            <h1> Loading... </h1>
        );
    }
}

export default Grid;