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

                        <Col sm={4} style={{paddingBottom:"3rem"}}>
                            <Card style={{border:"0px"}}>
                                <div className="top-img">
                                    <Card.Img variant="top" src={item.image} width="100%" height="100%" />
                                </div>
                                <Card.Body>
                                    <Card.Title style={{color:"black"}}>
                                        <h3>
                                            <b>{item.heading}</b>
                                        </h3>
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
