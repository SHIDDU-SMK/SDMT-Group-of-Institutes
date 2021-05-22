import React  from 'react';
import {Carousel} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import MedicalCollege from './image/sdm-medical-college.jpg';
import Hospital from './image/sdm-hospital.jpg';
import CollageView  from './image/sdm-top-view.jpeg';


function Slider() {    
  
      return (
          <Carousel >
            <Carousel.Item>
              <Image
                className="d-block w-100 carousel-item" 
                src={MedicalCollege}
                alt="First slide"
                width='100%'
                height='auto'
              />
            </Carousel.Item>
            <Carousel.Item interval={900}>
              <Image
                className="d-block w-100 carousel-item"
                src={Hospital}
                alt="Third slide"
                width='100%'
                height='auto'
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image  
                className="d-block w-100 carousel-item"
                src={CollageView}
                alt="Third slide"
                width='100%'
                height='auto'
              />
            </Carousel.Item>
          </Carousel>
       );
    }

export default Slider;