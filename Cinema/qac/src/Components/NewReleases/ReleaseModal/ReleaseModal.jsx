import { Modal, Row, Col, Button, Image, Container } from "react-bootstrap";

const ReleaseModal = (props) => {

    const eachRel = props.data;
    console.log(eachRel);

    return (
        <Modal {...props} centered  >
            <Modal.Header className="ModalBody" closeButton>
                <Modal.Title>
                    Movie: {eachRel.title} 
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="ModalBody">
                <Container>
                    <Row >
                        <Col >
                            <br />
                            <Row className="modalRow">
                                Director: {eachRel.director}
                            </Row>
                            <Row className="modalRow">
                                Genre: {eachRel.genre}
                            </Row>
                            <Row className="modalRow">
                                Budget: ${eachRel.budget} Million 
                            </Row>
                            <Row className="modalRow">
                                Release: {eachRel.releasedate}
                            </Row>
                        </Col>
                        <Col >
                            <Image src={eachRel.poster} alt={eachRel.title} align="right" style={{ minHeight: "250px", minWidth: "160px", maxHeight: "250px", maxWidth: "160px" }} />
                        </Col>
                    </Row>
                    <br />
                    <Row className="modalBorder">
                        <Col>
                            <div >
                                <Row>
                                    <h5 >Actors: </h5>
                                </Row>
                                <Row>
                                    {eachRel.mainactors}
                                </Row>
                                <Row>
                                    {eachRel.actors}
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <div className="modalBorder">
                            <h5 >Synopsis:</h5>
                            <p>{eachRel.story}</p>
                        </div>
                    </Row>

                </Container>
            </Modal.Body>
            <Modal.Footer className="modal-footer justify-content-center" >
                <Button href={eachRel.web} target="_blank" id="modalButton">{eachRel.title} Website</Button>
                <Button onClick={props.onHide} id="modalClose">Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ReleaseModal;