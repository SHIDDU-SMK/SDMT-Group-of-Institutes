import React  from 'react';
import {Carousel} from 'react-bootstrap';
import MedicalCollege from './assets/images/sdm-medical-college.jpg';
import Hospital from './assets/images/sdm-hospital.jpg';
import CollageView  from './assets/images/sdm-top-view.jpeg';
import { Fade, Zoom} from 'react-reveal';



function Slider() {    
  
  return (
          <Carousel fade>
            <Carousel.Item>
              <Zoom>
                <img
                  className="d-block w-100 carousel-item" 
                  src={MedicalCollege}
                  alt="First slide"
                  width='100%'
                  height='auto'
                />
              </Zoom>
              <Carousel.Caption data-aos="zoom-in-up" >
               
                <h3 style={{color:"black"}}>
                  <b>An Education as unique as you are</b>
                </h3 >
                <p style={{color:"gray"}}>One of the best institutes in Karnataka Imparted to provide Quality Education And practical Knowledge in Different Fields of Education in the Northern part of Karnataka With World Class Modern Facilities.</p>
               
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Zoom>
                <img
                  className="d-block w-100 carousel-item"
                  src={Hospital}
                  alt="Third slide"
                  width='100%'
                  height='auto'
                />
              </Zoom>
              <Carousel.Caption data-aos="zoom-in-up">
              
                <h3 style={{color:"black"}}>
                  <b>An Education as unique as you are</b>
                </h3 >
                <p style={{color:"gray"}}>One of the best institutes in Karnataka Imparted to provide Quality Education And practical Knowledge in Different Fields of Education in the Northern part of Karnataka With World Class Modern Facilities.</p>
               
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Zoom>
                <img
                  className="d-block w-100 carousel-item"
                  src={CollageView}
                  alt="Third slide"
                  width='100%'
                  height='auto'
                />
              </Zoom>
              <Carousel.Caption data-aos="zoom-in-up">
                
                <h3 style={{color:"black"}}>
                  <b>An Education as unique as you are</b>
                </h3 >
                <p style={{color:"#303232"}}>One of the best institutes in Karnataka Imparted to provide Quality Education And practical Knowledge in Different Fields of Education in the Northern part of Karnataka With World Class Modern Facilities.</p>
             
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      }

export default Slider;