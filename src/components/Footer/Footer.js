import React, {Component, Fragment} from 'react';
import { Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faYoutube, } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope,faMobile} from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="footerArea">
                    <Container fluid>
                        <Row>
                            <Col lg={3} sm={12} className="p-5">
                                <div className="footerItem">
                                    <h4>Follow Me</h4>
                                    <a href=""><FontAwesomeIcon icon={faFacebook}/> Facebook</a> <br/>
                                    <a href=""><FontAwesomeIcon icon={faYoutube}/> Youtube</a>
                                </div>
                            </Col>
                            <Col lg={3} sm={12} className="p-5">
                                <div className="footerItem">
                                    <h4>Address</h4>
                                    <p>#79/6 Padma Residential Aria, 3rd Floor Front Side, Rajshahi</p>
                                    <p><FontAwesomeIcon icon={faEnvelope}/> raselm606@gmail.com</p>
                                    <p><FontAwesomeIcon icon={faMobile}/>  +8801681789989</p>
                                </div>
                            </Col>
                            <Col lg={3} sm={12} className="p-5">
                                <div className="footerItem">
                                    <h4>Information</h4>
                                    <a href=""> About Me</a> <br/>
                                    <a href=""> My Resume</a> <br/>
                                    <a href=""> Contact Me</a>
                                </div>
                            </Col>
                            <Col lg={3} sm={12} className="p-5">
                                <div className="footerItem">
                                    <h4>Legal</h4>
                                    <a href=""> Refund Policy</a> <br/>
                                    <a href=""> Terms And Condition</a> <br/>
                                    <a href=""> Privacy Policy</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="footerCopyright text-center">
                    <Container>
                        <Row>
                            <Col>
                                <a href="" className="copyrightLink">ico-dev.com &copy; 2019-2020</a>
                            </Col>
                        </Row>
                    </Container>
                </div>



            </Fragment>
        );
    }
}

export default Footer;