import Carousel from 'react-bootstrap/Carousel';

const CarouselDisplay = () => {

    return (
        <Carousel>
            <Carousel.Item align="center">
                <img
                    className="d-block w-75 h-15"
                    src="https://d1nslcd7m2225b.cloudfront.net/Pictures/780xany/3/5/4/1342354_pr2trlr00657_857435.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 id="CarouselName">Peter Rabbit 2</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item align="center">
                <img
                    className="d-block w-75 h-15"
                    src="https://thenationroar.com/wp-content/uploads/2020/04/quiet-place-2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 id="CarouselName">The Quiet Place 2</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item align="center">
                <img
                    className="d-block w-75 h-15"
                    src="https://www.joblo.com/assets/images/joblo/news/2021/02/cruella-poster-disney.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 id="CarouselName">Cruella</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item align="center">
                <img
                    className="d-block w-75 h-15"
                    src="https://movies-b26f.kxcdn.com/wp-content/uploads/2020/11/DSKY-Movie-Poster_FINAL-scaled-1-e1593800575920-770x470.jpg"
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h3 id="CarouselName">Demon Slayer</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselDisplay;