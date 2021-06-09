import { Container } from "reactstrap";
import CarouselDisplay from "./CarouselDisplay";

const HomePage = () => {
    document.title = "Home"

    return (
        <Container>
            <br />
            <CarouselDisplay />
        </Container>
    );
}

export default HomePage;