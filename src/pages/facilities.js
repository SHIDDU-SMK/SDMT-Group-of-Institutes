import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import collegeImg from '../assets/images/danigond-science-college.jpg';
import Campus  from '../assets/images/campus.jpg';
import PlayGround  from '../assets/images/play-ground.jpg';
import ClassRoom  from '../assets/images/class-room.jpg';
import OfficeRoom  from '../assets/images/office-room.png';
import MeetingRoom  from '../assets/images/meeting-room.png';
import Reception from '../assets/images/reception.jpg';
import { Fade} from 'react-reveal';



class Atmos extends Component {
  render() {
        return (
            <>
            <Header />
                <div className=" text-white" id="top">
                    <img  src={collegeImg} className="card-img kenburns-bottom-left" alt="main img" width
                    = "100%" height ="500"/>
                </div>

                <div className="container" style={{paddingTop:"2rem"}}>
                    <h1 className="main-heading">
                        <b>FACILITIES OF DANIGOND GROUP OF INSTITUTES</b>
                    </h1>               
                    <div className="row" style={{paddingTop:"3rem"}}>
                        <Fade right>
                        <div className="col-md-7 order-md-2 ">
                            <ul style={{paddingTop:"4rem", fontSize:"20px"}}>
                                <li>25 Acre Beautiful Campus with Panoraamic view.</li>
                                <li>School building with excellent infrastructure located in healthy and pleasant surroundings.</li>
                                <li>Free IIT and NEET Foundation Course from Grade 6 to 9.</li> 
                                <li>Free NTSE Coaching for Grade 10 Students.
                                Productive, attractive and fun kindergarten classrooms with user friendly
                                learning materials.</li> 
                                <li>Separate well organized play area for kindergarten to stimulate physical and mental skill.</li> 
                                <li>Boarding, Day Boarding and Day School Facility.</li> 
                            </ul>
                        </div>
                        </Fade>
                        <Fade left>
                        <div className="col-md-5 order-md-1">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto zoom-container" width="450" height="450" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                            <image href={Campus} alt="Campus-img" width="100%" height="100%"/></svg>
                        </div>
                        </Fade>
                    </div>    
                    <hr className="featurette-divider"/>
                </div>

                <div className="container">
                    <div className="row" >
                    <Fade left>
                        <div className="col-md-7">
                            <ul style={{paddingTop:"5rem", fontSize:"20px"}}>
                                <li>Affordable Fees Structure.</li> 
                                <li>Indoor and Outdoor Games.</li>
                                <li>Smart and specious class rooms with natural light and fresh air.</li>
                                <li>Efficiently managed Transport facility.
                                Nutritious and Hygienic Food.</li>
                                <li>Sophisticated Laboratories.(Physics, Chemistry, Biology and Mathematics)</li>
                                <li>Nutritious and Hygienic Food.</li>
                            </ul>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-md-5 order-md-1">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto zoom-container" width="450" height="450" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500" style={{float:"right"}}>
                            <image href={PlayGround} alt="PlayGround-img" width="100%" height="100%"/></svg>
                        </div>
                    </Fade>
                    </div>    
                    <hr className="featurette-divider"/>
                </div>

                <div className="container">
                    <div className="row" >
                    <Fade right>
                        <div className="col-md-7 order-md-2">
                            <ul style={{paddingTop:"5rem", fontSize:"20px"}}>
                                <li> Individual attention to each Child.</li> 
                                <li>Emergency Medical Facility.</li>
                                <li> Art and Music room to stimulate the imagination and nurture the skill.</li>
                                <li>Well Established Computer Lab.</li>
                                <li>Variety of co-curricular activities (Music, Dance, Karate, Art, Quiz, Role Play, Spell Bee, Debate etc..,</li>
                                <li> International Level skating rink.</li>
                                <li>Special medical care is taken to avoid CORONA (Covid-19)</li>
                            </ul>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className="col-md-5 order-md-1">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto zoom-container" width="450" height="450" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                            <image href={ClassRoom} alt="ClassRoom-img" width="100%" height="100%"/></svg>
                        </div>
                    </Fade>
                    </div>    
                            <hr className="featurette-divider"/>
                </div>

                <div className="container">
                    <div className="row" >
                    <Fade left>
                        <div className="col-md-7">
                            <ul style={{paddingTop:"6rem", fontSize:"20px"}}>
                                <li>Creative, Dedicated, Caring and Qualified teachers.</li> 
                                <li>24/7 CCTV Camera For Safety and Security.</li>
                                <li>SMS and Mobile app for parents.</li>
                                <li>Purified RO water for Drinking.</li>
                                <li>10% School Fees Concession for Soldier's Children.</li>
                                <li>Free Transportation for local Terdal Students.</li>
                                <li>Advanced RFID technology for student's attendance.</li>
                            </ul>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-md-5 order-md-1">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto zoom-container" width="450" height="450" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500" style={{float:"right"}}>
                            <image href={OfficeRoom} alt="OfficeRoom-img" width="100%" height="100%"/></svg>
                        </div>
                    </Fade>
                    </div>    
                            <hr className="featurette-divider"/>
                </div>

                <div className="container">
                    <div className="row" >
                    <Fade right>
                        <div className="col-md-7 order-md-2">
                            <ul style={{paddingTop:"6rem", fontSize:"20px"}}>
                                <li>Lift Facility for students and Parents.</li> 
                                <li>Eco-Friendly and Anger Free Zone Campus.</li> 
                                <li>State of the art Infrastructure and Interiors.</li> 
                                <li>Perfect Blend in traditional values and modern views.</li> 
                                <li>Limited Number of students in each class to facilitate individual attention.</li> 
                                <li>World-Class Hostel Facility for Boys and Girls, Mess with Free Laundry Facility.</li> 
                                <li>Specifically the school bus camera system is continually activated.</li>
                            </ul>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className="col-md-5 order-md-1">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto zoom-container" width="450" height="450" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                            <image href={MeetingRoom} alt="MeetingRoom-img" width="100%" height="100%"/></svg>
                        </div>
                    </Fade>
                    </div>    
                        <hr className="featurette-divider"/>
                </div>

                <div className="container">
                    <div className="row" >
                    <Fade left>
                        <div className="col-md-7">
                            <ul style={{paddingTop:"6rem", fontSize:"20px"}}>
                                <li>Utmost preference for the safety of the children.</li> 
                                <li>Hostel Rooms with Attached Bath Room Facility.</li> 
                                <li>Comfortable Conveyance for out station students.</li> 
                                <li>Free Spoken English Classes.</li> 
                                <li>Sports and Cultural activities.</li> 
                                <li>Field Trips.</li>  
                                <li>Library as a Period to encourage reading habit.</li>                                                              
                            </ul>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-md-5 order-md-1">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto zoom-container" width="450" height="450" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500">
                            <image href={Reception} alt="Reception-img" width="100%" height="100%"/></svg>
                        </div>
                    </Fade>
                    </div>    
                        <hr className="featurette-divider"/>
                </div>
            <Footer />
            </>
        );
    }
  }
  export default Atmos;
