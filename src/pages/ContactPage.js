import React, {Component, Fragment} from 'react';
import NavBarTop from "../components/NavBarTop/NavBarTop";
import TopSection from "../components/TopSection/TopSection";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <NavBarTop/>
                <TopSection topTitle="Contact page"/>
                <Contact/>
                <Footer/>

            </Fragment>
        );
    }
}

export default ContactPage;