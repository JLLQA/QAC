import { Card, CardImg, CardText, Button, List, Container } from 'reactstrap';

const RatingPG = () => {
    return (
        <div>

            <CardImg id="movCert" src="https://static.wikia.nocookie.net/rating-system/images/b/b5/BBFC_PG.svg" alt="PG Parental Guidance"></CardImg>
            <br />
            <br />
            <Card body>
                <CardText>
                    <h3 align="center">PG Parental Guidance</h3>
                    <br />
                    A PG rated film is a film where parental guidance is suggested.
                    It should be suitable for general viewing and should not have scenes that may unsettle a child of an age around 8 years.
                </CardText>
                <List>
                    <ul id="classification">
                        <br />
                        <li>Dangerous Behaviour: Dangerous behaviour that could encourage children to imitate should be avoided, especially if these actions are depicted as fun. No glorifying of weapons such as knives.</li>
                        <li>Discrimination: Is unacceptable unless discouraged, used as educational or depicted in historical context. Discrimination by characters or individuals that may appeal to children is likely to be unacceptable.</li>
                        <li>Drugs: Unless it is used for educational purposes or displayed as innocuous.</li>
                        <li>Language: Very moderated use of mild bad language.</li>
                        <li>Nudity: Shouldn't be used in a sexual tone.</li>
                        <li>Sex: May be implied but should not be frequent.</li>
                        <li>Threat and Horror: Horror scenes should not last for a considerable time or be intense.</li>
                        <li>Violence: Should be mild, but moderated use of violence is permissible given an appropriate context like history, etc.</li>
                    </ul>
                </List>
                <Container align="center">
                    <Button id="infoButton" type="button" href="https://www.bbfc.co.uk/rating/pg">For more info on 'PG Parental Guidance' rating.</Button>
                </Container>
            </Card>
        </div>
    )
};

export default RatingPG;