import { Modal, Row, Col, Button, Image, Container } from "react-bootstrap";

const ReleaseModal = (props) => {

    const eachRel = props.data;
    console.log(eachRel);

    return (
        <Modal {...props} centered style={{border: "2px solid white"}} >
            <Modal.Header style={{color:"white" ,backgroundImage: "linear-gradient(to right, #004050, #4F0821)"}}closeButton>
                <Modal.Title  >
                    {eachRel.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{color:"white" ,backgroundImage: "linear-gradient(to right, #004050, #4F0821)"}}>
                <Container>
                    <Row >
                        <Col >
                            <br />
                            <Row>
                                Genre: {eachRel.genre}
                            </Row>
                            <br />
                            <Row>
                                Budget: ${eachRel.budget} million
                            </Row>
                            <br />
                            <Row>
                                Director: {eachRel.director}
                            </Row>
                            <br />
                            <Row>
                                Release Date: {eachRel.releasedate}
                            </Row>
                        </Col>
                        <Col >
                            <Image src={eachRel.poster} alt={eachRel.title} align="right" style={{ minHeight: "250px", minWidth: "160px", maxHeight: "250px", maxWidth: "160px" }} />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        Plot: {eachRel.story}
                    </Row>
                    <Row>
                        Main Actors: {eachRel.mainactors}
                    </Row>
                    <Row>
                        Other Actors Include: {eachRel.actors}
                    </Row>

                </Container>
            </Modal.Body>
        <Modal.Footer class="modal-footer justify-content-center"style={{alignContent:"left", color:"white" , backgroundImage: "linear-gradient(to right, #000, #4F0821)"}}>
                <Button href={eachRel.web} target="_blank">{eachRel.title} Website</Button>
                <Button onClick={props.onHide} >Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ReleaseModal;