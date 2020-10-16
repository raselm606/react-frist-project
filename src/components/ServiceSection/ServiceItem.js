import React, {Component, Fragment} from 'react';
import {Col} from "react-bootstrap";

class ServiceItem extends Component {
    render() {
        return (
            <Fragment>
                <Col lg={4} md={4} sm={6} className="text-center mb-3">
                    <div className="webSection">
                        <img src={this.props.image} alt=""/>
                        <h5>{this.props.title}</h5>
                        <p>{this.props.description}</p>
                    </div>
                </Col>
                
            </Fragment>
        );
    }
}

export default ServiceItem;