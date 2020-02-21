import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../assets/img/students.jpg'
import image2 from '../assets/img/preschoolers.jpg'
import image3 from '../assets/img/kindergarten.jpg'


class Carousal extends Component {
    render() {
        return (
            <Carousel  interval="3000" fade>
                <Carousel.Item> 
                    <img
                        className="d-block w-100 h-60"
                        src={image1}
                        alt="First slide"
                        style={{height:"500px"}}
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
                        style={{height:"500px"}}
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100 h-60"
                        src={image3}
                        alt="Third slide"
                        style={{height:"500px"}}
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Carousal;