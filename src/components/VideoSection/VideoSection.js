import React, {Component, Fragment} from 'react'
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons"
import "video-react/dist/video-react.css"
import { Player, BigPlayButton, LoadingSpinner   } from 'video-react'
import CourseOneFourr from '../../assets/images/courseo4.jpg'
import ReactPlayer from 'react-player'

class VideoSection extends Component {
    constructor(){
        super();
        this.state={
            show:false
        }
    }
    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})

    render() {
        return (
            <Fragment>
                <div className="videoSection">
                    <Container>
                        <Row className="video-section">
                            <Col lg={12} md={12}>
                                <div className="videoText text-center">
                                    <h3 className="videoTitle">How i Do</h3>
                                    <p className="videoDescript">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.</p>
                                    <FontAwesomeIcon icon={faPlayCircle} onClick={this.modalOpen} color='#0073e6' style={{marginRight:'10px', fontSize:'48px', cursor:'pointer'}}/>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>ICO Project Video</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {/*custom player*/}
                            <Player playsInline poster={CourseOneFourr} className="mb-4">
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position="center" />
                            </Player>
                            {/*youtube player */}
                            <ReactPlayer style={{width:'100%'}} controls url='https://www.youtube.com/watch?v=zTitoHKsyJg' playing />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.modalClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

            </Fragment>
        );
    }
}

export default VideoSection;