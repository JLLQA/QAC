import { Modal, Row, Col, Button, Image, Container } from "react-bootstrap";

const ReleaseModal = (props) => {

    const eachRel = props.data;
    console.log(eachRel);

    return (
        <Modal {...props} centered  >
            <Modal.Header style={{ color: "white", backgroundImage: "linear-gradient(to right, #000, #4F0821)" }} closeButton>
                <Modal.Title>
                    Movie: {eachRel.title} 
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ color: "white", backgroundImage: "linear-gradient(to right, #000, #4F0821)" }}>
                <Container>
                    <Row >
                        <Col >
                            <br />
                            <Row style={{lineHeight:"40px"}}>
                                Genre: {eachRel.genre}
                            </Row>
                            <Row style={{lineHeight:"40px"}}>
                                Budget: ${eachRel.budget} Million 
                            </Row>
                            <Row style={{lineHeight:"40px"}}>
                                Director: {eachRel.director}
                            </Row>
                            <Row style={{lineHeight:"40px",}}>
                                Release: {eachRel.releasedate}
                            </Row>
                        </Col>
                        <Col >
                            <Image src={eachRel.poster} alt={eachRel.title} align="right" style={{ minHeight: "250px", minWidth: "160px", maxHeight: "250px", maxWidth: "160px" }} />
                        </Col>
                    </Row>
                    <br />
                    <Row style={{ border: "1px solid white" }}>
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
                        <div style={{ border: "1px solid white" }}>
                            <h5 >Storyline:</h5>
                            <p>{eachRel.story}</p>
                        </div>
                    </Row>

                </Container>
            </Modal.Body>
            <Modal.Footer class="modal-footer justify-content-center" style={{ alignContent: "left", color: "white", backgroundImage: "linear-gradient(to right, #000, #4F0821)" }}>
                <Button href={eachRel.web} target="_blank">{eachRel.title} Website</Button>
                <Button onClick={props.onHide} >Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ReleaseModal;