import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Form, Nav } from 'react-bootstrap';
import Logo from './assets/images/logo.png';
import ScrollToTop from './scrolltotop';

const Header = () => {
    const [expanded, setExpanded] = useState(false);
    // const [hidemenu, setHideMenu] = useState(false);

    return (
        <>
            <ScrollToTop>
                <Navbar expand="lg" fixed='top' expanded={expanded} style={{ backgroundColor: '#BDE5E2' }}>
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt="logo" width="100%" height="100%"/>
                    </Navbar.Brand>            
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className="nav-link line current main-navigation" style={{color:'black'}}>
                                Home
                            </Link>
                            <Link to="/#about" className="nav-link line main-navigation" style={{color:'black'}}>
                                About
                            </Link>
                            <Link to="/#institutes" className="nav-link line main-navigation" style={{color:'black'}}>
                                Institutes
                            </Link>
                            <Link to="/#contact" className="nav-link line main-navigation" style={{color:'black'}}>
                                Contact
                            </Link>
                        </Nav>    
                        <Form inline style={{paddingLeft:'100px'}}>
                            <span style={{ fontSize:"16px", color:'black'}}><i className="fa fa-phone"></i>&emsp;+91 9876543210&emsp; <br /><i className="fa fa-envelope"></i>&emsp;sdmtinstitutesterdal@gmail.com</span>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </ScrollToTop>
        </>
    );
}
export default Header;
