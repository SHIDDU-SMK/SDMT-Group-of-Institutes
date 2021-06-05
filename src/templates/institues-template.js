import React from 'react';
import { Container, Col, Row, Card } from "react-bootstrap";

import AOS from 'aos';
import 'aos/dist/aos.css';


function InstituesTemplate({data}) {
    AOS.init({
        offset: 200,
        duration: 1500,
        easing: 'ease',
        delay: 200,
    })
    return (
        
            <Container id="institutes">
               
                    <h2 className="featurette-heading text-center" data-aos="fade-up"  style={{paddingBottom:"5rem", paddingTop:"5rem"}}>
                        Our Institutes
                    </h2>
               
                <Row>
                    { data.cards.map ( item => 

                        <Col sm={3} data-aos="fade-up" style={{paddingBottom:"2rem"}}>
                        
                            <Card className="img-shadow zoom-container" >
                                <div className="">
                                    <Card.Img variant="center" src={item.image} alt={item.alt} width="265px" height="150px" />
                                <Card.Body style={{textAlign:"center"}}>
                                    <Card.Title style={{color:"black"}}>
                                        <h3  style={{fontSize:'15px'}}>
                                            <b>{item.collegeName}</b>
                                        </h3>
                                        <p style={{fontSize:'15px'}}>
                                            City : {item.city}
                                        </p>
                                    </Card.Title>
                                    <Card.Text style={{fontSize:'12px'}}>
                                        {item.para}
                                    </Card.Text>
                                </Card.Body>
                                </div>
                            </Card>
                         
                        </Col>
                        )
                    } 
                </Row>
            </Container>
       
    );

}

export default InstituesTemplate;
