import React, { useState } from 'react';
import "./events.css";
import { useTranslation } from 'react-i18next';
import { Accordion, Row, Col,Modal, Button } from "react-bootstrap";

const Events = () => {
    const { t, i18n } = useTranslation();
    const [show, setShow] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState({ title: '', date: '' });

    const events = [
        { title: 'Event 1', date: '01 Jan 2024' },
        { title: 'Event 2', date: '15 Jan 2024' },
        { title: 'Event 3', date: '20 Jan 2024' },
    ];
    const upComingevents = [
        { title: 'Event 4', date: '01 Jan 2025' },
        { title: 'Event 5', date: '15 Jan 2025' },
        { title: 'Event 6', date: '20 Jan 2025' },
    ];

    const handleShow = (event: { title: string; date: string }) => {
        setSelectedEvent(event);
        setShow(true);
    };

    const handleClose = () => setShow(false);


    return (
        <div className="w-100 home-bg p-2 main-content">
            <Row className="gx-0">
                <Col md={6} className="p-2">
                    <Accordion defaultActiveKey="0" >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Happened Events</Accordion.Header>
                            <Accordion.Body>
                                <ul className="list-group">
                                    {events.map((event, index) => (
                                        <li
                                            key={index}
                                            className="list-group-item d-flex justify-content-between align-items-center"
                                        >
                                            <a
                                                href="#"
                                                className="text-decoration-none"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleShow(event);
                                                }}
                                            >
                                                {event.title}
                                            </a>
                                            <span className="badge bg-primary rounded-pill">{event.date}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{selectedEvent.title}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Details for {selectedEvent.title} scheduled on {selectedEvent.date}.
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col md={6} className="p-2">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Upcoming Events</Accordion.Header>
                            <Accordion.Body>
                            <ul className="list-group">
                                    {upComingevents.map((event, index) => (
                                        <li
                                            key={index}
                                            className="list-group-item d-flex justify-content-between align-items-center"
                                        >
                                            <a
                                                href="#"
                                                className="text-decoration-none"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleShow(event);
                                                }}
                                            >
                                                {event.title}
                                            </a>
                                            <span className="badge bg-primary rounded-pill">{event.date}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </div>
    );
};

export default Events;