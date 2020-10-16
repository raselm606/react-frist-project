import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CourseOneImg from "../../assets/images/courseo1.jpg";
import CourseOneTwo from "../../assets/images/courseo2.jpg";
import CourseOneThree from "../../assets/images/courseo3.jpg";
import CourseOneFour from "../../assets/images/courseo4.jpg";

class AllCourses extends Component {
    render() {
        return (
            <Fragment>
                <div className="courseSection mt-5">
                    <Container>
                        <Row>
                            <Col lg={12} className="text-center">
                                <h1 className="courseTitle">OUR COURSES</h1>
                            </Col>

                            <Col lg={6} md={6} sm={12} className="mb-3">
                                <Row className="mb-3">
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="courseImg">
                                            <img src={CourseOneImg} alt=""/>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="courseText">
                                            <h4>Web Development</h4>
                                            <p>I build native and cross platfrom mobile app for your business app for your business</p>
                                            <a href="">Details</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={6} md={6} sm={12} className="mb-3">
                                <Row className="mb-3">
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="courseImg">
                                            <img src={CourseOneTwo} alt=""/>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="courseText">
                                            <h4>Web Development</h4>
                                            <p>I build native and cross platfrom mobile app for your business app for your business</p>
                                            <a href="">Details</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={6} md={6} sm={12} className="mb-3">
                                <Row className="mb-3">
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="courseImg">
                                            <img src={CourseOneThree} alt=""/>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="courseText">
                                            <h4>Web Development</h4>
                                            <p>I build native and cross platfrom mobile app for your business app for your business</p>
                                            <a href="">Details</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={6} md={6} sm={12} className="mb-3">
                                <Row className="mb-3">
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="courseImg">
                                            <img src={CourseOneFour} alt=""/>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="courseText">
                                            <h4>Web Development</h4>
                                            <p>I build native and cross platfrom mobile app for your business app for your business</p>
                                            <a href="">Details</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={6} md={6} sm={12} className="mb-3">
                                <Row className="mb-3">
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="courseImg">
                                            <img src={CourseOneFour} alt=""/>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="courseText">
                                            <h4>Web Development</h4>
                                            <p>I build native and cross platfrom mobile app for your business app for your business</p>
                                            <a href="">Details</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={6} md={6} sm={12} className="mb-3">
                                <Row className="mb-3">
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="courseImg">
                                            <img src={CourseOneFour} alt=""/>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="courseText">
                                            <h4>Web Development</h4>
                                            <p>I build native and cross platfrom mobile app for your business app for your business</p>
                                            <a href="">Details</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={6} md={6} sm={12} className="mb-3">
                                <Row className="mb-3">
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="courseImg">
                                            <img src={CourseOneFour} alt=""/>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="courseText">
                                            <h4>Web Development</h4>
                                            <p>I build native and cross platfrom mobile app for your business app for your business</p>
                                            <a href="">Details</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={6} md={6} sm={12} className="mb-3">
                                <Row className="mb-3">
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="courseImg">
                                            <img src={CourseOneFour} alt=""/>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="courseText">
                                            <h4>Web Development</h4>
                                            <p>I build native and cross platfrom mobile app for your business app for your business</p>
                                            <a href="">Details</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </Fragment>
        );
    }
}

export default AllCourses;