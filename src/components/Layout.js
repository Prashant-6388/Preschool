import React, { Component } from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import NavigationBar from './NavigationBar'
import Carousal from './Carousal';
import Cards from './Cards';
import image3 from '../assets/img/kindergarten.jpg'
import Team from './Team';
import Fade from 'react-bootstrap/Fade';
import Contact from './Contact';

class Layout extends Component {
    render() {
        return (
            <Container style={{ maxWidth: "100%", maxHeight: "40%", margin: "0px", padding: "0px" }}>
                <NavigationBar />
                <Carousal />
                <Team />
                <br />
                <br />
                <Fade in={true}>
                    <Container style={{  justifyContent: "center" }} >
                        <Row style={{margin:"40px 10px"}}>
                            <Col ><Cards /></Col>
                            <Col ><Cards /></Col>
                            <Col ><Cards /></Col>

                        </Row>

                        <Row style={{margin:"10px 10px"}}>
                            <Col ><Cards /></Col>
                            <Col ><Cards /></Col>
                            <Col ><Cards /></Col>

                        </Row>
                    </Container>
                </Fade>
                <br />
                <br /><br />
                <br />
                <Jumbotron fluid
                    style={{ textAlign: "center" }} >
                    <Container style={{ display: "flex", justifyContent: "center" }}  >
                        <Row>
                            <Col ><Cards /></Col>

                        </Row>
                    </Container>
                </Jumbotron>
                <Contact />


            </Container>
        )
    };
}

export default Layout;
