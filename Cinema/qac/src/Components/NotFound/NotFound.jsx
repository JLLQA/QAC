import { Container } from "reactstrap";

const Notfound = () => {

    return (
        <div id="dropped-box" className="container-fluid">
            <Container align="center">
                <Container>
                    <h1>~~404~~</h1>
                </Container>
                <br />
                <Container>
                    <h3>We're sorry but that page can't be found</h3>
                </Container>
                <br />
                <Container >
                    <img id="" src="https://media.istockphoto.com/vectors/duckling-under-the-weather-cute-character-sticker-vector-id615881364?k=6&m=615881364&s=612x612&w=0&h=rOlNOGoMrXcDT7Y2D0UyKHOl97VWeEBWASZ-xaBcrTY="></img>
                </Container>
                <br />
                <Container>
                    <h3>Don't worry we're working on it</h3>
                </Container>
            </Container>
        </div>
    );
};
export default Notfound;