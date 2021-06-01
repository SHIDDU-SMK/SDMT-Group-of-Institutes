import React, { Component } from 'react';
import logo from './assets/images/SDMT-logo.png';
import { HashLink as Link } from 'react-router-hash-link';

class Footer extends Component {
  render() {
        return (
        
                  <div className="fluid">
                    <footer className="card-body footer-text" style={{backgroundColor:"#BDE5E2",marginTop:'5rem'}}>
                    <div className="row" id="contact">
                          <div className="col-sm-5">
                              <img src={logo} alt="logo img" className="image-center" width="200px" height="150px"/>
                              <p className="text-color" style={{paddingTop:'1rem'}}>One of the best institutes in Karnataka Imparted to provide Quality Education And practical Knowledge in Different Fields of Education in the Northern part of Karnataka With World Class Modern Facilities.</p>
                          </div>  
                          <div className="col-sm-3" style={{paddingTop:'2rem'}}>
                              <h4 id="contact" className="card-title text-color"><b>Quick Links</b></h4>
                              <span className="card-text">
                                  <ul >
                                    <li className="decoration-text">
                                      <Link to="/" className="link-color" >Home</Link>
                                    </li>
                                    <li className="decoration-text">
                                      <Link to="/aboutus" className="link-color" >About</Link>
                                    </li>
                                    <li className="decoration-text">
                                      <Link to="/services" className="link-color" >Institutes</Link>
                                    </li>
                                    <li className="decoration-text">
                                      <Link to="/governing-body" className="link-color" >Facilities</Link><br/>
                                    </li>
                                  </ul>
                              </span>
                          </div>
                        <div className="col-sm-4" style={{paddingTop:'2rem'}}>
                              <h4 className="text-color"><b>Contact</b></h4>
                              <p className="text-color">DANIGOND GROUP OF INSTITUTES TERDAL. <br/>Ayurvedic Medical College, Danigond Post-Graduation Centre,
                              Padma Ayurvedic Hospital & Research Centre
                              Siddhnt Nagaar, Terdal 587 315.</p>
                            <p>
                                <a className="link-color" target='blanck'  href="https://goo.gl/maps/B2sxiWzPL3cJUEtx9" ><i className="fas fa-map-marker-alt" style={{"font-size":"36px"}}></i></a>&emsp;
                                <a className="link-color" target='blanck' href="https://www.facebook.com/114966076622454/posts/457419292377129/"><i className="fa fa-facebook" style={{"font-size":"36px"}}></i></a>&emsp;
                            </p>
                            <span style={{ fontSize:"16px", color:'black'}}><i className="fa fa-phone"></i>&emsp; Hospital +91 96202-20900,<br/> <i className="fa fa-phone"></i>&emsp; College- +91 96865-57142<br /><i className="fa fa-envelope"></i>&emsp;sdmt@gmail.com</span>
                        </div>
                    </div>
                    <div style={{paddingBottom:"1rem"}}>
                      <p className="text-color">&copy; Danigond Group of Institutes &middot; <a className="link-color" href="#privacy">Privacy</a> &middot; <a className="link-color" href="#terms">Terms</a></p>
                      <p><a className="link-color float-right" href="www.anyonecancode.in">Design & Developed By SMK Solutions </a></p>
                    </div>
                    </footer>
                  </div>
        );
    }
  }
  export default Footer;
