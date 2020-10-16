import React, {Component, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import CoursePage from "../pages/CoursePage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/service" component={ServicesPage}/>
                    <Route exact path="/course" component={CoursePage}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutPage}/>

                </Switch>

            </Fragment>
        );
    }
}

export default AppRoute;