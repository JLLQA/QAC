import { Modal, Container, Row, Col, Button } from "react-bootstrap";


const ReleaseModal = (props) => {

    const eachRel = props.data;
    console.log(eachRel);

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg" centered >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter"  >
                    {eachRel.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid" >
                <Container >
                    <Row>
                        <Col xs={6} md={4}>
                            <Row>
                            Main Actor: {eachRel.actors}
                            </Row>
                            <Row>
                            Main Director: {eachRel.director}
                            </Row>
                            <Row>
                            Expected Release: {eachRel.releasedate}
                            </Row>
                        </Col>
                        <Col >
                            <img src={eachRel.poster} alt={eachRel.title} align="right" />
                        </Col>
                    </Row>

                    <Row>
                           Plot: {eachRel.story}
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button  onClick={props.onHide} align="left">Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ReleaseModal;