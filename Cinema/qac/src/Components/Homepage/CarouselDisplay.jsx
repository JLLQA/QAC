import Carousel from 'react-bootstrap/Carousel';

const CarouselDisplay = () => {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block"
                    src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12B60/production/_109004667_02untitledgoosegamescreen3840x2160.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src="https://cdn.mos.cms.futurecdn.net/JycrJzD5tvbGHWgjtPrRZY-1200-80.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12B60/production/_109004667_02untitledgoosegamescreen3840x2160.png"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12B60/production/_109004667_02untitledgoosegamescreen3840x2160.png"
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselDisplay;