import { Card, CardImg, CardText, Button, List, Container } from 'reactstrap';

const Rating12 = () => {
    return (
        <div>
            <CardImg id="movCert" src="https://static.wikia.nocookie.net/rating-system/images/8/84/BBFC_12.svg" alt="12 – Suitable for 12 years and over"></CardImg>
            <br />
            <br />
            <Card body>
                <CardText>
                    <h3 align="center">12 – Suitable for 12 years and over</h3>
                    <br />
                    A 12 rated film should not be suitable for children under the age of 12.
                    Children under the age of 12 who wish to see the film must do so with an adult, who should take consideration about the content of the film.
                    The 12 rating is for video only.
                </CardText>
                <List>
                    <ul>
                        <br />
                        <li>Dangerous Behaviour: Dangerous behaviour that could encourage children to imitate should be avoided, especially if these actions are depicted as fun. No glorifying of weapons such as knives. Anti-social behaviour should not be promoted.</li>
                        <li>Discrimination: The film as a whole should not endorse discrimination. Strong discriminatory language should not be present unless strongly condemned.</li>
                        <li>Drugs: Drug abuse should not be frequent or promoted.</li>
                        <li>Language: Moderate bad language is permissible while strong bad language is permissible given the right context and as long as it is not frequent.</li>
                        <li>Nudity: May be present, but if used as sexual content it must be discreet and brief.</li>
                        <li>Sex:Sexual references may be present as long as they aren't frequent. Sex acts may also be present as long as they are discreet and brief.</li>
                        <li>Threat and Horror: Horror scenes may be present as long as it is moderate.</li>
                        <li>Violence: Moderate violence is permissible. Infrequent strong violent scenes are permissible as long as there is a proper context.</li>
                    </ul>
                </List>
                <Container align="center">
                    <Button id="infoButton" type="button" href="https://www.bbfc.co.uk/rating/12">For more info on '12 – Suitable for 12 years and over' rating.</Button>
                </Container>
            </Card>
        </div>
    )
};

export default Rating12;