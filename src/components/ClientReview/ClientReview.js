import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";
import clientImg from "../../assets/images/icon3.png"
import clientImg2 from "../../assets/images/icon1.png"

class ClientReview extends Component {
    render() {
        var sliderSettings = {
            autoplaySpeed:3000,
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true,
            verticalSwiping:true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <div className="clientReview">
                    <Container>
                        <Row className="text-center">
                            <Col lg={12}>
                                <h1 className="clientTitle">Client Review</h1>
                            </Col>
                        </Row>
                        <Slider {...sliderSettings}>
                            <div>
                                <Row className="text-center  justify-content-center">
                                    <Col lg={8}>
                                        <div className="imgSlidee">
                                            <img src={clientImg} alt="client1"/>
                                        </div>
                                        <h3>Web Developer</h3>
                                        <p>I desing modern user interface and other graphical components for your business and instiution graphical components for your business and instiution</p>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className="text-center  justify-content-center">
                                    <Col lg={8}>
                                        <div className="imgSlidee">
                                            <img src={clientImg2} alt="client1"/>
                                        </div>
                                        <h3>Web Developer</h3>
                                        <p>I desing modern user interface and other graphical components for your business and instiution graphical components for your business and instiution</p>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className="text-center  justify-content-center">
                                    <Col lg={8}>
                                        <div className="imgSlidee">
                                            <img src={clientImg} alt="client1"/>
                                        </div>
                                        <h3>Web Developer</h3>
                                        <p>I desing modern user interface and other graphical components for your business and instiution graphical components for your business and instiution</p>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row className="text-center justify-content-center">
                                    <Col lg={8}>
                                        <div className="imgSlidee">
                                            <img src={clientImg2} alt="client1"/>
                                        </div>
                                        <h3>Web Developer</h3>
                                        <p>I desing modern user interface and other graphical components for your business and instiution graphical components for your business and instiution</p>
                                    </Col>
                                </Row>
                            </div>
                        </Slider>
                    </Container>
                </div>

            </Fragment>
        );
    }
}

export default ClientReview;