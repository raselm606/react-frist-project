import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";

class Analysis extends Component {
    constructor(){
        super();
        this.state={
            data:[
                {Technology:'Java', Projects:100},
                {Technology:'Kotlin', Projects:40},
                {Technology:'Sql', Projects:90},
                {Technology:'Bootstrap', Projects:95},
                {Technology:'Jquery', Projects:60},
                {Technology:'React', Projects:90},
                {Technology:'PHP', Projects:100},
                {Technology:'Angular', Projects:65}
            ]
        }
    }
    render() {
        return (
            <Fragment>
                <div className="analysisArea">
                    <h2 className="analysisTitle text-center">Technology Used</h2>
                    <Container>
                        <Row>
                            <Col style={{width:'100%', height:'300px', marginTop:'45px', marginBottom:'30px'}} lg={6} md={12} sm={12}>
                                <ResponsiveContainer>
                                    <BarChart data={this.state.data}>
                                        <Tooltip/>
                                        <XAxis dataKey="Technology"/>
                                        <Bar dataKey="Projects" fill="rgba(0,155,230,0.8)"></Bar>
                                    </BarChart>

                                </ResponsiveContainer>
                            </Col>

                            <Col lg={6} md={12} sm={12}>
                                <p className="analysisText">To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.</p>
                                <p className="analysisText">I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section.</p>
                                <p className="analysisText">Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
            </Fragment>
        );
    }
}


export default Analysis;