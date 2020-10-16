import React, {Component, Fragment} from 'react';
import NavBarTop from "../components/NavBarTop/NavBarTop";
import TopSection from "../components/TopSection/TopSection";
import AboutSection from "../components/About/AboutSection";
import Footer from "../components/Footer/Footer";

class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <NavBarTop/>
                <TopSection topTitle="About page"/>
                <AboutSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;