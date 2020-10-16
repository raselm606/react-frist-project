import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class AboutSection extends Component {
    render() {
        return (
            <Fragment>
                <div className="aboutPageSection">
                    <Container>
                        <Row>
                            <Col lg={12} className="mt-5 mb-3">
                                <h2>Who i AM</h2>
                                <hr/>
                                <p>I am a highly talented, experienced, professional and cooperative software engineer, I am working in
                                    programming and web world for more than 4 years .I assure you a wide range of quality IT services.
                                    Web development, mobile app development and UI design the major filed i am expert in. Moreover i have
                                    teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete
                                    software developer, so you can hire me for your projects</p>

                            </Col>
                            <Col lg={12} className="mt-3">
                                <h2>My Mission</h2>
                                <hr/>
                                <p>My mission is to develop unique idea and quality software that will secure top ranking in marketplace,
                                    people's system and people's heart. Develop robust, secure, dynamic, responsive software for all platform
                                    (computer, tab, mobile phone). Provide top notch customer service, customization of our product according
                                    to customer demand and current technology. Planning advanced techniques for optimization, user experience
                                    and satisfaction of customer for our software. Planning flexible software that will not be bounded by any
                                    linguistic or regional restriction. I want to flourish software that can blow people's heart and soul</p>

                            </Col>
                            <Col lg={12} className="mt-3">
                                <h2>My Vision</h2>
                                <hr/>
                                <p>My vision is to brand our firm as the best firm in the world. Secure the top place among software providers
                                    for both local and international market. Brand our country as the best software provider country. Create
                                    employment for youth on the field of both software and corporate level. Provide our country and world with
                                    superior software. Nurture youths to be highly skilled software engineers</p>

                            </Col>
                        </Row>
                    </Container>
                </div>

            </Fragment>
        );
    }
}

export default AboutSection;