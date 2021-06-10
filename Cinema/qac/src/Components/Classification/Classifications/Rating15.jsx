import { Card, CardImg, CardText, Button, List, Container } from 'reactstrap';

const Rating15 = () => {
    return (
        <div>
            <CardImg id="movCert" src="https://static.wikia.nocookie.net/rating-system/images/0/03/BBFC_15.svg" alt="15 – Suitable only for 15 years and over"></CardImg>
            <br />
            <br />
            <Card body>
                <CardText>
                    <h3 align="center">15 – Suitable only for 15 years and over</h3>
                    <br />
                    A 15 rated film should not be seen by children under the age of 15 at the cinema, nor be bought or rented by them.
                </CardText>
                <List>
                    <ul id="classification">
                        <br />
                        <li>Dangerous Behaviour: Dangerous behaviour like suicide, self harm, etc. should not be promoted or displayed in such detail that it may be imitated. Ease of access of weapons should only be displayed if the context is justified.</li>
                        <li>Discrimination: The film as a whole should not endorse discrimination. Strong discriminatory language may be present as long as it is not endorsed in the film.</li>
                        <li>Drugs: Drug abuse can be present as long as it is not encouraged or promoted. Abuse of easily accessible drugs is likely to be unacceptable.</li>
                        <li>Language: Strong language may be present. Very strong language is permissible as long as the context is justified and is infrequent.</li>
                        <li>Nudity: Non-sexual nudity is permissible as well as if it is educational. Sexual nudity is permissible as long as it is brief and not in detail.</li>
                        <li>Sex: Sexual activity is permissible as long as it is not strongly detailed. Strong sexual language is permissible but should not be frequent, especially dialog regarding pornographic detail. The film should not be purposefully sexual in tone.</li>
                        <li>Sexual Violence and Sexual Threat: Can be referred, but very strong sexual violence shall not be present in detail.</li>
                        <li>Threat and Horror: Strong horror scenes can be present but sadistic horror threats are not permissible.</li>
                        <li>Violence: Strong violence is permissible but the film should not focus on injury or the aspect of inflicting pain. Strong gore and sadistic violence is not permissible.</li>
                    </ul>
                </List>
                <Container align="center">
                    <Button id="infoButton" type="button" href="https://www.bbfc.co.uk/rating/15">For more info on '15 – Suitable only for 15 years and over' rating.</Button>
                </Container>
            </Card>
        </div>
    )
};

export default Rating15;