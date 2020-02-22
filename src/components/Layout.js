import React, { Component } from 'react'
import { Container, Row, Col, Jumbotron, Figure, Carousel, Card } from 'react-bootstrap'
import NavigationBar from './NavigationBar'
import Carousal from './Carousal';
import Cards from './Cards';
import Team from './Team';
import Contact from './Contact';
import img1 from '../assets/img/card_img.jpg'
import img2 from '../assets/img/card_img1.jpg'
import img3 from '../assets/img/card_img2.jpg'
import img4 from '../assets/img/card_img3.jpg'
import img5 from '../assets/img/card_img4.jpg'


class Layout extends Component {
    render() {
        return (
            <Container style={{ maxWidth: "85%" }}>
                <NavigationBar />
                <section className="bg-light page-section" id="home">
                    <Carousal />
                </section>

                <Team />
                <br />
                <br />

                <section className="bg-light page-section" id="gallary">
                    <h1 style={{textAlign: "center", color:"rgba(84, 84, 84, 1)", paddingTop: "20px"}}>Learn with fun</h1>
                    <Container style={{ justifyContent: "center" }} >
                        <Row style={{ margin: "40px 10px" }}>
                            <Col ><Cards img={img5} /></Col>
                            <Col ><Cards img={img1} /></Col>
                            <Col ><Cards img={img2} /></Col>
                        </Row>

                        <Row style={{ margin: "10px 10px" }}>
                            <Col ><Cards img={img4} /></Col>
                            <Col ><Cards img={img3} /></Col>
                        </Row>
                    </Container>
                </section>
                <br />
                <br /><br />
                <br />
                <section className="bg-light page-section" id="team">
                    <Jumbotron fluid
                        style={{ textAlign: "center", backgroundColor: "rgba(235, 235, 235, 0.73)", justifyContent: "center" }} >
                        <h2>Meet Our Team</h2>
                        <Container style={{ display: "flex", justifyContent: "center" }}  >

                            <Row>
                                <Carousel interval="5000" indicators={false}>
                                    <Carousel.Item>
                                        <Card style={{ backgroundColor: "rgba(0, 0, 0, 0)", border: "none" }}>
                                            <Figure>
                                                <Figure.Image
                                                    width="300px"
                                                    height="300px"
                                                    alt="171x180"
                                                    src={img1}
                                                    roundedCircle={true}
                                                />
                                            </Figure>
                                            <Card.Body>
                                                <Card.Title><b>Name</b></Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Card style={{ backgroundColor: "rgba(0, 0, 0, 0)", border: "none" }}>
                                            <Figure>
                                                <Figure.Image
                                                    width="300px"
                                                    height="300px"
                                                    alt="171x180"
                                                    src={img1}
                                                    roundedCircle={true}
                                                />
                                            </Figure>
                                            <Card.Body>
                                                <Card.Title><b>Name</b></Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Card style={{ backgroundColor: "rgba(0, 0, 0, 0)", border: "none" }}>
                                            <Figure>
                                                <Figure.Image
                                                    width="300px"
                                                    height="300px"
                                                    alt="171x180"
                                                    src={img1}
                                                    roundedCircle={true}
                                                />
                                            </Figure>
                                            <Card.Body>
                                                <Card.Title><b>Name</b></Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Carousel.Item>
                                </Carousel>
                            </Row>
                        </Container>
                    </Jumbotron>
                </section>
                <Contact />


            </Container>
        )
    };
}

export default Layout;
