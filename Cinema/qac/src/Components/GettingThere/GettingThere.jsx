import { Col, Container, Row } from "react-bootstrap";
import Map from "./GettingThereComponents/Map";

const GettingThere = () => {
    return (
        <Container>
            <Row align="right">
                <Col >
                    <h1 >QACinema</h1>
                    <h2>Placeholder Address</h2>

                </Col>
            </Row>
            <Row align="center">

                <Col >
                    <div style={{ height: '40vh', width: '50%' }}>

                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/1200px-Burj_Khalifa.jpg" style={{ height: '40vh', width: '50%' }} alt="QAC" />
                    </div>
                    <Map />
                </Col>
            </Row>
        </Container>
    )


}



export default GettingThere;