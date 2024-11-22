import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const ContactUs = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="home-bg pt-2 main-content">
            {/* <h1 className="text-left mb-4">{t('navbar.contactus')}</h1> */}
            <Row className="mb-5">
                <Col lg={6} md={12}>
                    <h3 className="mb-3">Our Offices</h3>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>Main Office</Card.Title>
                            <Card.Text>
                                <strong>Address:</strong> 123 Main Street, Downtown City, NY 12345
                            </Card.Text>
                            <Card.Text>
                                <strong>Contact:</strong> +1 555-123-4567
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>Branch Office</Card.Title>
                            <Card.Text>
                                <strong>Address:</strong> 456 Side Avenue, Uptown City, NY 67890
                            </Card.Text>
                            <Card.Text>
                                <strong>Contact:</strong> +1 555-987-6543
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Committee Members */}
                <Col lg={6} md={12}>
                    <h3 className="mb-3">Committee Members</h3>
                    <Row>
                        <Col sm={12} md={4}>
                            <Card className="text-center mb-3">
                                <Card.Body>
                                    <Card.Title>President</Card.Title>
                                    <Card.Text>ABC</Card.Text>
                                    <Card.Text>
                                        <small>Email: president@example.com</small><br />
                                        <small>Mobile: 1234567890</small>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={4}>
                            <Card className="text-center mb-3">
                                <Card.Body>
                                    <Card.Title>Secretary</Card.Title>
                                    <Card.Text>XYZ</Card.Text>
                                    <Card.Text>
                                        <small>Email: secretary@example.com</small><br />
                                        <small>Mobile: 1234567890</small>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={4}>
                            <Card className="text-center mb-3">
                                <Card.Body>
                                    <Card.Title>Cashier</Card.Title>
                                    <Card.Text>PQR</Card.Text>
                                    <Card.Text>
                                        <small>Email: cashier@example.com</small><br />
                                        <small>Mobile: 1234567890</small>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default ContactUs;