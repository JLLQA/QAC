import { Container } from 'reactstrap';
import Navbar from '../../Multipage/Navbar/Navbar'
const Screens = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div id="dropped-box" className="container-fluid">
                <Container>
                    <div align="center">
                        <h1>This is a standard screen</h1>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/a/a1/Mallard2.jpg' alt="duck"></img>
                        <img src='https://c.stocksy.com/a/sS2400/z9/962790.jpg' alt="basicseat"></img>
                        <h1>This is a deluxe screen</h1>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/a/a1/Mallard2.jpg' alt="duck2"></img>
                        <img src='https://www.showcasecinemas.com/Media/1739/woburnseatsmob2.jpg' alt="deluxeseat"></img>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Screens;