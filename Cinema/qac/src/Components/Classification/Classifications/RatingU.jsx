import { Card, CardImg, CardText, Button, List } from 'reactstrap';

const RatingU = () => {
    return (
        <div>
            <CardImg id="movCert" src="https://static.wikia.nocookie.net/rating-system/images/8/88/BBFC_U.svg" alt="U Universal - Suitable for all"></CardImg>
            <br />
            <br />
            <Card body>
                <CardText>
                    <h3 align="center">U Universal - Suitable for all</h3>
                    <br />
                    A U rated film has to be suitable for an audience of all ages. The film also has to follow the following guidelines on these matters;
                    </CardText>
                <List>
                    <ul>
                        <br />
                        <li>Dangerous Behaviour: Bad/anti-social behaviour that could encourage young children should be discouraged.</li>
                        <li>Discrimination: Is unacceptable, unless strongly discouraged.</li>
                        <li>Drugs: Unless it is used for educational purposes or displayed as innocuous.</li>
                        <li>Language: Only mild bad language few and far between.</li>
                        <li>Nudity: Shouldn't be used in a sexual tone and shouldn't be frequent.</li>
                        <li>Sex: Shouldn't be used in a sexual tone and shouldn't be frequent.</li>
                        <li>Threat and Horror: Horror scenes should be toned down in the horror aspect and shouldn't last on the screen for long. The aftermath has to be pleasant or reassuring.</li>
                        <li>Violence: Should be very mild, but mild use of violence is permissible given an appropriate context like cartoonish, comedic, etc.</li>
                    </ul>
                </List>
                <Button id="infoButton" type="button" href="https://www.bbfc.co.uk/rating/u">For more info on 'U Universal' rating.</Button>
            </Card>
        </div>
    )
};

export default RatingU;