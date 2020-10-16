import React, {Component, Fragment} from 'react';
import NavBarTop from "../components/NavBarTop/NavBarTop";
import TopSection from "../components/TopSection/TopSection";
import Footer from "../components/Footer/Footer";
import AllCourses from "../components/All Courses/AllCourses";

class CoursePage extends Component {
    render() {
        return (
            <Fragment>
                <NavBarTop/>
                <TopSection topTitle="All Courses page"/>
                <AllCourses/>
                <Footer/>

            </Fragment>
        );
    }
}

export default CoursePage;