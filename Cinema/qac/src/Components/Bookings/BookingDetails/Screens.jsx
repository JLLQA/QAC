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
                    <h1>This is a standard screen</h1>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/a/a1/Mallard2.jpg'></img>
                    <h1>This is a deluxe screen</h1>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/a/a1/Mallard2.jpg'></img>
                </Container>
            </div>
        </div>
    );
}

export default Screens;