import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import ServiceItem from "./ServiceItem";
import ServiceSectionData from "../AllServices/ServiceData"

class ServiceSection extends Component {
    render(props) {

        const productComponent = ServiceSectionData.map(
            services => <ServiceItem key={services.id}  title={services.title} description={services.description} image={services.image}/>
        )
        return (
            <Fragment>
                <div className="serviceArea" id="service">
                    <Container>
                        <Row>
                            <Col md={12} className="text-center mb-5">
                                <h2 className="sectionTitle">My Services</h2>
                            </Col>

                            {productComponent}

                        </Row>
                    </Container>
                </div>

            </Fragment>
        );
    }
}

export default ServiceSection;