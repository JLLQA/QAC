import {useEffect, useState} from "react";
import { Container } from "reactstrap";
import ReviewTableRow from "./ReviewTableRow";

const TableView = ({incomingData}) => {
    const [ready, setReady] = useState(false);
    const [reviewArray, setReviewArray] = useState([]);

    useEffect(() => {
        let array = [];

        while (incomingData.length) {
            array.push(incomingData.splice(0,1));
        }

        setReviewArray(array);
        setReady(true);
    }, []);

    if (ready) {
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
                            {reviewArray.map((obj, i) => (
                                <tr key={i}>
                                    <ReviewTableRow objects={obj}/>
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