import React, { Component } from 'react'
import {Card} from 'react-bootstrap'

import Figure from 'react-bootstrap/Figure'

class Cards extends Component {
    render() {
        return (

            <Card style={{ border:"none", backgroundColor:"rgba(0, 0, 0, 0)" }}>
                <Card.Img variant="top" src={this.props.img} />
                
            </Card>

        )
    }
}

export default Cards