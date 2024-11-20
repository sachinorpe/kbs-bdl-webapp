import React from "react";
import { Carousel } from "react-bootstrap";

const HomeCarousel = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-50">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400?text=First+Slide"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First Slide Label</h3>
                        <p>Some description for the first slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400?text=Image"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second Slide Label</h3>
                        <p>Some description for the second slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x400?text=Img2"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third Slide Label</h3>
                        <p>Some description for the third slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeCarousel;
