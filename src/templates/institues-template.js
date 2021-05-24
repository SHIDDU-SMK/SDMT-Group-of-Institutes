import React from 'react';
import { Container, Col, Row, Card } from "react-bootstrap";



function InstituesTemplate({data}) {
    return (
            <Container id="institutes">
                    <h2 className="featurette-heading text-center"  style={{paddingBottom:"5rem", paddingTop:"5rem"}}>
                        Our Institutes
                    </h2>
                <Row>
                    { data.cards.map ( item => 

                        <Col sm={4} style={{paddingBottom:"2rem"}}>
                            <Card>
                                <div className="top-img">
                                    <Card.Img variant="top" src={item.image} alt={item.alt} width="100%" height="200px" />
                                </div>
                                <Card.Body>
                                    <Card.Title style={{color:"black"}}>
                                        <h3  style={{fontSize:'20px'}}>
                                            <b>{item.collegeName}</b>
                                        </h3>
                                        <p style={{fontSize:'15px'}}>
                                            City : {item.city}
                                        </p>
                                    </Card.Title>
                                    <Card.Text>
                                        {item.para}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    } 
                </Row>
            </Container>
    );

}

export default InstituesTemplate;
