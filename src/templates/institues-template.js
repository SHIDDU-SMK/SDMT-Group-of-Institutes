import React from 'react';
import { Container, Col, Row, Card } from "react-bootstrap";
import { Fade} from 'react-reveal';




function InstituesTemplate({data}) {
    return (
        
            <Container id="institutes">
                <Fade bottom>
                    <h2 className="featurette-heading text-center"  style={{paddingBottom:"5rem", paddingTop:"5rem"}}>
                        Our Institutes
                    </h2>
                </Fade>
                <Row>
                    { data.cards.map ( item => 

                        <Col sm={4} style={{paddingBottom:"2rem"}}>
                            <Fade bottom>
                            <Card className="img-shadow zoom-contziner">
                                <div className="">
                                    <Card.Img variant="center" src={item.image} alt={item.alt} width="350px" height="200px" />
                                <Card.Body style={{textAlign:"center"}}>
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
                                </div>
                            </Card>
                            </Fade>
                        </Col>
                        )
                    } 
                </Row>
            </Container>
       
    );

}

export default InstituesTemplate;
