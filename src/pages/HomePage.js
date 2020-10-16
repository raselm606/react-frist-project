import React, {Component, Fragment} from 'react';
import NavBarTop from "../components/NavBarTop/NavBarTop";
import TopBanner from "../components/TopBanner/TopBanner";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import ProjectSection from "../components/Project/ProjectSection";
import CourseSection from "../components/Courses/CourseSection";
import VideoSection from "../components/VideoSection/VideoSection";
import ClientReview from "../components/ClientReview/ClientReview";
import Footer from "../components/Footer/Footer";

class HomePage extends Component {
    render() {

        return (
            <Fragment>
                <NavBarTop/>
                <TopBanner/>
                <ServiceSection/>
                <Analysis/>
                <Summary/>
                <ProjectSection/>
                <CourseSection/>
                <VideoSection/>
                <ClientReview/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;