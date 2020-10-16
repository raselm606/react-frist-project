import React, {Component, Fragment} from 'react';
import NavBarTop from "../components/NavBarTop/NavBarTop";
import TopSection from "../components/TopSection/TopSection";
import Footer from "../components/Footer/Footer";
import AllCourse from "../components/All Projects/AllCourse";

class PortfolioPage extends Component {
    render() {
        return (
            <Fragment>
                <NavBarTop/>
                <TopSection topTitle="Porfolio Page"/>
                <AllCourse/>
                <Footer/>

            </Fragment>
        );
    }
}

export default PortfolioPage;