import CarouselDisplay from "./CarouselDisplay";

const HomePage = () => {
    document.title = "Home"

    return (
        <div id="dropped-box" className="container-fluid">
            <CarouselDisplay />
        </div>
    );
}

export default HomePage;