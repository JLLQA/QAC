import { Card, CardImg, CardText, Button, Container } from 'reactstrap';

const RatingR18 = () => {
    return (
        <div>

            <CardImg id="movCert" src="https://static.wikia.nocookie.net/rating-system/images/9/90/BBFC_R18.svg" alt="18 – Adult works for licensed premises only"></CardImg>
            <br />
            <br />
            <Card body>
                <CardText>
                    <h3 align="center">R18 - Adult works for licensed premises only</h3>
                    <br />
                    <p id="classification">
                        The R18 film category is a legally restricted classification for works including strong sexual content.
                        These films can only be should in specially licensed cinemas and may only be distributed in licensed sex shops.
                        These works may not be supplied by mail order and will be filtered out of main publicly available search services unless adult content is enabled.
                    </p>
                </CardText>
                <Container align="center">
                    <Button id="infoButton" href="https://www.bbfc.co.uk/rating/r18">For more info on '18 – Adult works for licensed premises only' rating.</Button>
                </Container>
            </Card>
        </div>
    )
};

export default RatingR18;