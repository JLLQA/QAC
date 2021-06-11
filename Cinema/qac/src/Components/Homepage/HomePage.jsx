import { Container } from "reactstrap";
import CarouselDisplay from "./CarouselDisplay";

const HomePage = () => {
    document.title = "Home"

    return (
        <Container>
            <div>
                <div id="dropped-box" className="container-fluid" align="center">
                    <Container>
                        <br />
                        <p id="homeTitle">WELCOME TO QA CINEMAS</p>
                        <br />
                    </Container>
                </div>
                <br />
                <CarouselDisplay />
                <br />
                <h3 align="center">Currently Showing</h3>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </Container>
    );
}

export default HomePage;