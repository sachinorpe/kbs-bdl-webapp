import React from 'react';
import './services.css';
import { useTranslation } from 'react-i18next';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

const Services = () => {
    const { t, i18n } = useTranslation();

    return (
        <Container className="my-4 home-bg justify-content-center align-items-center pt-1">
        <Row>
            {/* First Column */}
            <Col xs={12} md={4} className="mb-4">
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/125x125?text=Service1" alt="Card Image" />
                    <Card.Body>
                        <Card.Title>Helping Poor Children</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
                </Card>
            </Col>

            {/* Second Column */}
            <Col xs={12} md={4} className="mb-4">
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/125x125?text=Service2" alt="Card Image" />
                    <Card.Body>
                        <Card.Title>Blood Donation Camps</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
                </Card>
            </Col>

            {/* Third Column */}
            <Col xs={12} md={4} className="mb-4">
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/125x125?text=Service3" alt="Card Image" />
                    <Card.Body>
                        <Card.Title>Senior Citizen Programs</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>        
    );
};

export default Services;