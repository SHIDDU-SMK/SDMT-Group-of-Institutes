import React, { Component } from 'react';
import logo from './image/SDMT-logo.png';
import { HashLink as Link } from 'react-router-hash-link';

class Footer extends Component {
  render() {
        return (
        
                  <div className="fluid">
                    <footer className="card-body footer-text" style={{backgroundColor:"#BDE5E2",marginTop:'5rem'}}>
                    <div className="row" id="contact">
                          <div className="col-sm-5">
                              <img src={logo} alt="logo img" width="95px" height="80px"/>
                              <p className="text-color">One of the best institutes in Karnataka Imparted to provide Quality Education And practical Knowledge in Different Fields of Education in the Northern part of Karnataka With World Class Modern Facilities.</p>
                          </div>  
                          <div className="col-sm-3">
                              <h4 id="contact" className="card-title text-color"><b>Quick Links</b></h4>
                              <span className="card-text">
                                  <ul >
                                    <li className="decoration-text">
                                      <Link to="/aboutus" className="link-color" >About us</Link>
                                    </li>
                                    <li className="decoration-text">
                                      <Link to="/services" className="link-color" >Services</Link>
                                    </li>
                                    <li className="decoration-text">
                                      <Link to="/governing-body" className="link-color" >Governing Body</Link><br/>
                                    </li>
                                    <li className="decoration-text">
                                      <Link to="/your-rights" className="link-color" >Your Rights</Link>
                                    </li>
                                    <li className="decoration-text">
                                      <Link to="/Public-Grievance-Cell" className="link-color" >Public Grievance Cell</Link>
                                    </li>
                                    <li className="decoration-text">
                                      <Link to="/gallery" className="link-color" >Gallery</Link>
                                    </li>
                                    <li className="decoration-text">
                                      <Link to="/" className="link-color" >Indian Laws</Link>
                                    </li>
                                    <li className="decoration-text">
                                      <Link to="/our-activity" className="link-color" >Our Activity</Link>
                                    </li>
                                  </ul>
                              </span>
                          </div>
                        <div className="col-sm-4">
                              <h4 className="text-color"><b>Contact</b></h4>
                              <p className="text-color">NATIONAL CRIME CONTROL BOARD <br />328, 3rd Floor, 1st Main Road Talakaveri Layout, Amruthalli, Bangalore-560092</p>
                            <p>
                                <a className="link-color" target='blanck'  href="https://goo.gl/maps/B2sxiWzPL3cJUEtx9" ><i className="fas fa-map-marker-alt" style={{"font-size":"36px"}}></i></a>&emsp;
                                <a className="link-color" target='blanck' href="https://www.facebook.com/114966076622454/posts/457419292377129/"><i className="fa fa-facebook" style={{"font-size":"36px"}}></i></a>&emsp;
                            </p>
                            <span style={{ fontSize:"16px", color:'black'}}><i className="fa fa-phone"></i>&emsp;+91 8660341251&emsp; <br /><i className="fa fa-envelope"></i>&emsp;nccbkarnataka@gmail.com</span>
                        </div>
                    </div>
                    <div style={{paddingBottom:"1rem"}}>
                      <p className="text-color">&copy; NCCB &middot; <a className="link-color" href="#privacy">Privacy</a> &middot; <a className="link-color" href="#terms">Terms</a></p>
                      <p><a className="link-color float-right" href="www.anyonecancode.in">made by anyonecancode.in</a></p>
                    </div>
                    </footer>
                  </div>
        );
    }
  }
  export default Footer;
