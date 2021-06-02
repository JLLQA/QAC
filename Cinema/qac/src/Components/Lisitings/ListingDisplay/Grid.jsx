import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const Grid = ({ data }) => {

    const [ready, setReady] = useState(false);
    const [objArray, setObjArray] = useState([]);

    useEffect(() => {
        let array = [];

        array.push(data);

        setObjArray(array);
        setReady(true);
    }, []);


    if (ready) {
        return (
            <div id="img-grid" className="container-fluid">
                <table id="img-table">
                    <thead>
                        <tr>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {objArray.map((one, i) => (
                            <tr key={i}>
                                {console.log(objArray)}
                                <TableRow objects={one} />
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