import { Container } from 'reactstrap';
import Deluxe from './Pictures/Deluxe_Screen.png';
import Standard from './Pictures/Standard_Screen.png';

const Screens = () => {
    document.title = "Screen Information"

    return (
        <div id="dropped-box" className="container-fluid">
            <Container>
                <div align="center">
                    <Container>
                        <Container>
                            <h1>Screens 1 and 2</h1>
                            <h3>Classic Screen</h3>
                            <p>
                                These charming screens feature our iconic classic red padded seats, suitable for people of ages.
                            </p>
                        </Container>
                        <Container>
                            <img src='https://c.stocksy.com/a/sS2400/z9/962790.jpg' alt="basicseat"></img>
                            <img id="plan" src={Standard} alt="basicplan"></img>
                        </Container>
                    </Container>
                    <Container>
                        <Container>
                            <h1>Screen 3</h1>
                            <h3>Deluxe Screen</h3>
                            <p>
                                We like to refer to this screen as our "Directors Box".
                                <br />
                                These VIP seats have extra room to stretch out, a wider chair and are in the prime position,
                                giving you a perfect cinematic experience to view films the way they where meant to be seen.
                            </p>
                        </Container>
                        <Container>
                            <img src='https://www.showcasecinemas.com/Media/1739/woburnseatsmob2.jpg' alt="deluxeseat"></img>
                            <img id="plan" src={Deluxe} alt="deluxeplan"></img>
                        </Container>
                    </Container>
                </div>
            </Container>
        </div>
    );
}

export default Screens;