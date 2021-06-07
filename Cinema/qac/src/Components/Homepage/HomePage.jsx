import Navbar from "../Multipage/Navbar/Navbar";
import RatingPage from "../Review/RatingPage";
import CarouselDisplay from "./CarouselDisplay";

const HomePage = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div id="dropped-box" className="container-fluid">
                <CarouselDisplay />
            </div>
        </div>
    );
}

export default HomePage;