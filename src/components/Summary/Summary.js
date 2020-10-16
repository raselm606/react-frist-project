import React, {Component, Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Container, Row} from "react-bootstrap";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import Particles from 'react-particles-js';
import iconTwo from '../../assets/images/icon2.png'
import iconThree from '../../assets/images/icon3.png'



class Summary extends Component {

    render() {
        return (
            <Fragment>



                <div className="summaryArea mb-bottom" >
                    <div className="topSummaryOverlay text-center">
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
                                       },

                                       "images": [
                                           {
                                               "src": {iconTwo},
                                               "height": 20,
                                               "width": 23
                                           },
                                           {
                                               "src": {iconTwo},
                                               "height": 20,
                                               "width": 20
                                           },
                                           {
                                               "src": {iconThree},
                                               "height": 20,
                                               "width": 20
                                           }
                                       ]


                                   }
                                   }>

                        </Particles>
                       <Container>

                           <Row className="mTop ">

                               <Col lg={8} md={6} sm={12}>
                                   <Row className="textLL">
                                       <Col lg={6} md={6} sm={6} className="mb-3">
                                           <h1 className="counterNumber">
                                               <CountUp start={0} end={1200} >
                                                   {({ countUpRef, start }) => (
                                                       <VisibilitySensor onChange={start} delayedCall>
                                                           <span ref={countUpRef} />
                                                       </VisibilitySensor>
                                                   )}
                                               </CountUp>
                                           </h1>
                                           <h4 className="counterTitle">Total Projects</h4>
                                           <hr className="bg-white w-25"/>
                                       </Col>
                                       <Col lg={6} md={6} sm={6} className="mb-3">
                                           <h1 className="counterNumber">
                                               <CountUp start={0} end={200} >
                                                   {({ countUpRef, start }) => (
                                                       <VisibilitySensor onChange={start} delayedCall>
                                                           <span ref={countUpRef} />
                                                       </VisibilitySensor>
                                                   )}
                                               </CountUp>
                                           </h1>
                                           <h4 className="counterTitle">Total Clients</h4>
                                           <hr className="bg-white w-25"/>
                                       </Col>
                                   </Row>
                               </Col>

                               <Col lg={4} md={6} sm={12} >
                                   <Card style={{ textAlign:'left', padding:'30px 30px', }}>
                                       <Card.Body>
                                           <Card.Title className="sumTitle"> How i Work </Card.Title>
                                           <Card.Text className="subSub">
                                               <FontAwesomeIcon icon={faCheckCircle} color='#0073e6' style={{marginRight:'10px'}}/>
                                               requirement Gathering
                                           </Card.Text>
                                           <Card.Text className="subSub">
                                               <FontAwesomeIcon icon={faCheckCircle} color='#0073e6' style={{marginRight:'10px'}}/>
                                               System Analysis
                                           </Card.Text>
                                           <Card.Text className="subSub">
                                               <FontAwesomeIcon icon={faCheckCircle} color='#0073e6' style={{marginRight:'10px'}}/>
                                               Coding Testing
                                           </Card.Text>
                                           <Card.Text className="subSub">
                                               <FontAwesomeIcon icon={faCheckCircle} color='#0073e6' style={{marginRight:'10px'}}/>
                                               Implementation
                                           </Card.Text>
                                       </Card.Body>
                                   </Card>
                               </Col>
                           </Row>
                       </Container>

                    </div>

                </div>
                
            </Fragment>
        );
    }
}

export default Summary;