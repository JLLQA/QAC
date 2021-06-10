import { Container } from "reactstrap";

const Notfound = () => {
    document.title = "404"

    return (
        <div id="dropped-box" className="container-fluid">
            <Container align="center">
                <Container>
                    <h1>~~404~~</h1>
                </Container>
                <br />
                <Container>
                    <h3>You silly goose</h3>
                    <h3>We're sorry but that page can't be found</h3>
                </Container>
                <br />
                <Container >
                    <img id="plan" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12B60/production/_109004667_02untitledgoosegamescreen3840x2160.png" alt="basicplan"></img>
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