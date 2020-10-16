import React, {Component, Fragment} from 'react';
import Particles from "react-particles-js";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";

class TopSection extends Component {
    render() {
        return (
            <Fragment>
                <div className="topSectionBanner pd-0">
                    <div className="topBannerOverlay">
                        {/*particle js*/}
                        <Particles style={{position:'absolute', width:'100%', height:'100%', left:'0', top:'0'}}
                                   params={{
                                       "particles": {
                                           "number": {
                                               "value": 50
                                           },
                                           "size": {
                                               "value": 3
                                           }
                                       },
                                       "interactivity": {
                                           "events": {
                                               "onhover": {
                                                   "enable": true,
                                                   "mode": "repulse"
                                               }
                                           }
                                       }
                                   }} />
                        <Container>
                            <Row>
                                <Col className="topTextBanner text-center">
                                    <h4>{this.props.topTitle}</h4>
                                </Col>
                            </Row>
                        </Container>
                    </div>


                </div>

            </Fragment>
        );
    }
}

export default TopSection;