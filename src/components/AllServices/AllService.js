import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import webImage from "../../assets/images/web.svg";
import mobileImage from "../../assets/images/mobile.svg";
import graphicsImage from "../../assets/images/graphics.svg";

class AllService extends Component {
    render() {
        return (
            <Fragment>
                <div className="serviceArea" id="service">
                    <Container>
                        <Row>
                            <Col md={12} className="text-center mb-5">
                                <h2 className="sectionTitle">My Services</h2>
                            </Col>

                            <Col lg={4} md={4} sm={6} className="text-center mb-3">
                                <div className="webSection">
                                    <img src={webImage} alt=""/>
                                    <h5>Web Development</h5>
                                    <p>I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.I design and develop static and dynamic web sites as per
                                        your requirements as we believe, “web is world’s next home”.</p>
                                </div>
                            </Col>

                            <Col lg={4} md={4} sm={6} className="text-center mb-3">
                                <div className="webSection">
                                    <img src={mobileImage} alt=""/>
                                    <h5>Mobile Development</h5>
                                    <p>I build native and cross platfrom mobile app for your business and instiution as per as your requirements.</p>
                                </div>
                            </Col>

                            <Col lg={4} md={4} sm={6} className="text-center mb-3">
                                <div className="webSection">
                                    <img src={graphicsImage} alt=""/>
                                    <h5>Graphics Development</h5>
                                    <p>I desing modern user interface and other graphical components for your business and instiution.</p>
                                </div>
                            </Col>

                            <Col lg={4} md={4} sm={6} className="text-center mb-3">
                                <div className="webSection">
                                    <img src={graphicsImage} alt=""/>
                                    <h5>Graphics Development</h5>
                                    <p>I desing modern user interface and other graphical components for your business and instiution.</p>
                                </div>
                            </Col>

                            <Col lg={4} md={4} sm={6} className="text-center mb-3">
                                <div className="webSection">
                                    <img src={graphicsImage} alt=""/>
                                    <h5>Graphics Development</h5>
                                    <p>I desing modern user interface and other graphical components for your business and instiution.</p>
                                </div>
                            </Col>

                            <Col lg={4} md={4} sm={6} className="text-center mb-3">
                                <div className="webSection">
                                    <img src={graphicsImage} alt=""/>
                                    <h5>Graphics Development</h5>
                                    <p>I desing modern user interface and other graphical components for your business and instiution.</p>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>

            </Fragment>
        );
    }
}

export default AllService;