import React, {Component, Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/custom.css';
import whiteLogo from '../../assets/images/whitelogo.svg'
import blueLogo from '../../assets/images/bluelogo.svg'
import {NavLink} from "react-router-dom";

class NavBarTop extends Component {
    constructor(){
        super();
        this.state={
            navBarTitle:"navTitle",
            navVarent:"dark",
            navLogo:[whiteLogo],
            topNavBg: "topNavarea",
            navItem: "navItemColor"
        }
}

//scroll function for top logo scroll
    onScroll=()=>{
        if (window.scrollY>300){
            this.setState({navVarent:'light',navBarTitle:'navTitleScroll', navLogo:[blueLogo], topNavBg: 'topNavScroll', navItem:'navScrollColor'  })
        } else if(window.scrollY <100){
            this.setState({navVarent:'dark',navBarTitle:'navTitle', navLogo:[whiteLogo], topNavBg: 'topNavarea', navItem:'navItemColor'})
        }
    };

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }


    render() {
        return (
            <Fragment>
                <div className="navBarArea">
                    <Navbar className={this.state.topNavBg} fixed="top" collapseOnSelect expand="lg" bg="dark" variant={this.state.navVarent}>
                        <Navbar.Brand href="#home"> <NavLink className={this.state.navBarTitle} to="/"><img src={this.state.navLogo} alt="logo"/> Rasel Mahmud</NavLink></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link><NavLink exact  activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/" >Home</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact  activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/service" >Services</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact  activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/course" >Courses</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact  activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/portfolio" >Portfolio</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact  activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/contact" >Contact</NavLink></Nav.Link>
                                <Nav.Link><NavLink exact  activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/about" >About</NavLink></Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

            </Fragment>
        );
    }
}

export default NavBarTop;