import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import projectOne from "../../assets/images/mobilepondit.png";

class AllCourse extends Component {
    render() {
        return (
            <Fragment>
                <div className="projectSection">
                    <Container>
                        <Row  className="text-center">
                            <Col lg={12}>
                                <h1 className="projectTitle">Recent Project</h1>
                            </Col>
                            <Col lg={4} md={4} sm={12}>
                                <div className="projectItem">
                                    <div className="imgDiv">
                                        <img src={projectOne} alt=""/>
                                    </div>
                                    <div className="projectText">
                                        <h4>Card Title</h4>
                                        <p>Some quick example text to build on the card title and make.</p>
                                        <Button className="btn-primary">Details</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12}>
                                <div className="projectItem">
                                    <div className="imgDiv">
                                        <img src={projectOne} alt=""/>
                                    </div>
                                    <div className="projectText">
                                        <h4>Card Title</h4>
                                        <p>Some quick example text to build on the card title and make.</p>
                                        <Button className="btn-primary">Details</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12}>
                                <div className="projectItem">
                                    <div className="imgDiv">
                                        <img src={projectOne} alt=""/>
                                    </div>
                                    <div className="projectText">
                                        <h4>Card Title</h4>
                                        <p>Some quick example text to build on the card title and make.</p>
                                        <Button className="btn-primary">Details</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12}>
                                <div className="projectItem">
                                    <div className="imgDiv">
                                        <img src={projectOne} alt=""/>
                                    </div>
                                    <div className="projectText">
                                        <h4>Card Title</h4>
                                        <p>Some quick example text to build on the card title and make.</p>
                                        <Button className="btn-primary">Details</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12}>
                                <div className="projectItem">
                                    <div className="imgDiv">
                                        <img src={projectOne} alt=""/>
                                    </div>
                                    <div className="projectText">
                                        <h4>Card Title</h4>
                                        <p>Some quick example text to build on the card title and make.</p>
                                        <Button className="btn-primary">Details</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12}>
                                <div className="projectItem">
                                    <div className="imgDiv">
                                        <img src={projectOne} alt=""/>
                                    </div>
                                    <div className="projectText">
                                        <h4>Card Title</h4>
                                        <p>Some quick example text to build on the card title and make.</p>
                                        <Button className="btn-primary">Details</Button>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>

            </Fragment>
        );
    }
}

export default AllCourse;