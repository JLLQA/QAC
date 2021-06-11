import { Container } from "reactstrap";
import ReviewTableRow from "./ReviewTableRow";

const TableView = ({ data }) => {
    let myData = data;

    return (
        <div>
            <Container align="center">
                <h1>User Reviews</h1>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {myData.map((obj, i) => (
                            <tr key={i}>
                                <ReviewTableRow data={obj} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        </div>
    );
}

export default TableView;