import React from 'react';
import "./gallery.css";
import { useTranslation } from 'react-i18next';
import { Carousel } from "react-bootstrap";

const Gallery = () => {
    const { t, i18n } = useTranslation();
    const carouselImages = [
        { src: 'https://via.placeholder.com/800x400?text=First', alt: 'First Slide', caption: 'Caption for First Slide' },
        { src: 'https://via.placeholder.com/800x400?text=second', alt: 'Second Slide', caption: 'Caption for Second Slide' },
        { src: 'https://via.placeholder.com/800x400?text=third', alt: 'Third Slide', caption: 'Caption for Third Slide' },
    ];

    return (
        <div className="home-bg pt-2 d-flex justify-content-center align-items-center vh-50">
            <Carousel>
                {carouselImages.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={image.src}
                            alt={image.alt}
                            style={{ maxHeight: '500px', objectFit: 'cover' }}
                        />
                        <Carousel.Caption>
                            <h3>{image.caption}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Gallery;