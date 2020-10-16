import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <div className="contactArea mt-5">
                    <Container>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <h3>Quick Connect</h3>

                                <Form>
                                    <Form.Group controlId="name">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name" />
                                    </Form.Group>
                                    <Form.Group controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group controlId="messgae">
                                        <Form.Label>Your Message</Form.Label>
                                        <Form.Control as="textarea" rows="6" placeholder="Your message" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h3>Discuss Now</h3>
                                <p>#79/6 Padma Residential Aria, 3rd Floor Front Side, Rajshahi</p>
                                <p>Email: Engr.Rabbil@yahoo.com</p>
                                <p> Phone: +8801701063280</p>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </Fragment>
        );
    }
}

export default Contact;