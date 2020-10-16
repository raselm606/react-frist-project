import React, {Component, Fragment} from 'react';
import NavBarTop from "../components/NavBarTop/NavBarTop";
import TopSection from "../components/TopSection/TopSection";
import Footer from "../components/Footer/Footer";
import AllService from "../components/AllServices/AllService";

class ServicesPage extends Component {
    render() {
        return (
            <Fragment>
                <NavBarTop/>
                <TopSection topTitle="All Services"/>
                <AllService/>
                <Footer/>

            </Fragment>
        );
    }
}

export default ServicesPage;