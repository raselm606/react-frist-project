import React, {Component, Fragment } from 'react';
import {Container, Row, Col, Button, Modal} from "react-bootstrap";
import Particles from 'react-particles-js';
import {BigPlayButton, Player} from "video-react";
import CourseOneFourr from "../../assets/images/courseo4.jpg";
import ReactPlayer from "react-player";

class TopBanner extends Component {
    constructor(){
        super();
        this.state={
            show:false
        }
    }

    modalOff=()=>this.setState({show:false})
    modalOn=()=>this.setState({show:true})





    render(){




        return (
            <Fragment>
                <div className="topFixedBanner pd-0">
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

                                    <h1>Rasel Mahmud</h1>
                                    <h4>Mobile & Web Application</h4>
                                    <Button className="mt-3" onClick={this.modalOn} variant="primary">Hire me</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <Modal size="lg" show={this.state.show} onHide={this.modalOff}>
                        <Modal.Header closeButton>
                            <Modal.Title>ICO Project Video</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h2>Testing Popup</h2>
                            {/*custom player*/}
                            <Player playsInline poster={CourseOneFourr} className="mb-4">
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position="center" />
                            </Player>
                            {/*youtube player */}
                            <ReactPlayer style={{width:'100%'}} controls url='https://www.youtube.com/watch?v=zTitoHKsyJg' playing />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.modalOff}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </Fragment>
        );
    }
}

export default TopBanner;