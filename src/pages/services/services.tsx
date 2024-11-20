import React from 'react';
import './services.css';
import { useTranslation } from 'react-i18next';
import { Card, Button } from 'react-bootstrap';

const Services = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="w-100 home-bg d-flex justify-content-center align-items-center">
            <Card className='card-content'>
                <Card.Img variant="top" src="https://via.placeholder.com/125x125?text=Service1" alt="Card Image" />
                <Card.Body>
                    <Card.Title>Helping Poor Children</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                </Card.Body>
            </Card>
            <Card className='card-content'>
                <Card.Img variant="top" src="https://via.placeholder.com/125x125?text=Service2" alt="Card Image" />
                <Card.Body>
                    <Card.Title>Blood Donation Camps</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                </Card.Body>
            </Card>
            <Card className='card-content'>
                <Card.Img variant="top" src="https://via.placeholder.com/125x125?text=Service3" alt="Card Image" />
                <Card.Body>
                    <Card.Title>Senior Citizen Programs</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Services;