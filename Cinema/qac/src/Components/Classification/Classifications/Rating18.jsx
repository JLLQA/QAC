import { Card, CardImg, CardText, Button, List } from 'reactstrap';

const Rating18 = () => {
    return (
        <div>
            <CardImg id="movCert" src="https://static.wikia.nocookie.net/rating-system/images/9/9f/BBFC_18.svg" alt="18 – Suitable only for adults"></CardImg>
            <br />
            <br />
            <Card body>
                <CardText>
                    <h3 align="center">18 – Suitable only for adults</h3>
                    <br />
                    With supporting text below as a natural lead-in to additional content.
                    A rated 18 movie is unrestricted in a majority of the aspects and themes but there are exceptions;
                </CardText>
                <List>
                    <ul>
                        <li>The material should not break the law or created through the commission of a criminal offence.</li>
                        <li> The material should have individuals or society, such as promotion of rape, sadistic violence, etc.</li>
                        <li> Presence of overly explicit sexual content.</li>
                    </ul>
                </List>
                <Button id="infoButton" type="button" href="https://www.bbfc.co.uk/rating/18">For more info on '18 – Suitable only for adults' rating.</Button>
            </Card>
        </div>
    )
};

export default Rating18;