import { Container } from 'reactstrap';
import Navbar from '../../Multipage/Navbar/Navbar';
import Deluxe from './Screens/Deluxe_Screen.png';
import Standard from './Screens/Standard_Screen.png';

const Screens = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div id="dropped-box" className="container-fluid">
                <Container>
                    <div align="center">
                        <h1>Screens 1 and 2</h1>
                        <h3>Standard Screen</h3>
                        <p>These screens feature </p>
                        <img src='https://c.stocksy.com/a/sS2400/z9/962790.jpg' alt="basicseat"></img>
                        <img id="plan" src={Standard} alt="basicplan"></img>
                        <h1>Screen 3</h1>
                        <h3>Deluxe Screen</h3>
                        <p>We like to refer to this as our "Directors Box" screen.</p>
                        <img src='https://www.showcasecinemas.com/Media/1739/woburnseatsmob2.jpg' alt="deluxeseat"></img>
                        <img id="plan" src={Deluxe} alt="deluxeplan"></img>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Screens;