import {useEffect, useState} from "react";
import { Container } from "reactstrap";
import ReviewTableRow from "./ReviewTableRow";

const TableView = ({data}) => {
    const [ready, setReady] = useState(false);
    
    let myData = data;

        
    if (!ready) {
        return (
            <div id="dropped-box" className="container-fluid">
                <Container align="center">
                    <h1>Reviews</h1>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {myData.map((obj, i) => (
                                <tr key={i}>
                                    <ReviewTableRow data={obj}/>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Container>
            </div>
        );
    } else {
        return (
            <h1>Loading the reviews!</h1>
        );
    }
    
}

export default TableView;