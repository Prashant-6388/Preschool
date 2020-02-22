import React, { Component } from 'react'
import { Carousel, Form, Button, Col } from 'react-bootstrap'
import image1 from '../assets/img/kids1.jpg'
import image2 from '../assets/img/kids2.jpg'
import image3 from '../assets/img/kids3.jpg'


class Carousal extends Component {
    render() {
        return (
            
            <Carousel interval="3000" fade>
                
                                
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-60"
                        src={image1}
                        alt=""

                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100 h-60"
                        src={image2}
                        alt="Third slide"

                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        )
    }
}

export default Carousal;