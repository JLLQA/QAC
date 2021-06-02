import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Container } from 'reactstrap';
import { useState } from 'react';

const TableData = ({ object }) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <td>
                <div className="img-container">
                    <img src={object.Poster} alt="" onClick={toggle} />
                    <div className="img-overlay" onClick={toggle}>
                        <div className="img-text">{object.Title}</div>
                    </div>
                </div>
            </td>
            <Modal
                isOpen={modal}
                toggle={toggle}
                size="xl">
                <ModalHeader toggle={toggle}>{object.Title}</ModalHeader>
                <ModalBody>
                    <h3>Director</h3>
                    <h4>{object.Director}</h4>
                    <br></br>
                    <h3>Actors</h3>
                    <h4>{object.Actors}</h4>
                    <br></br>
                    <h3>Show times</h3>
                    <Container>
                        <Row>
                            <Col className = "colm" xs={12} md={8}>
                                .col-xs-12 .col-md-8
                            </Col>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                        </Row>
                    </Container>
                </ModalBody>

                <ModalFooter>
                    <Button color='danger' onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default TableData;