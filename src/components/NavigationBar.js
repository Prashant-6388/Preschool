import React, { Component } from 'react'
import { Navbar, Nav, Button, ButtonToolbar } from 'react-bootstrap';

class NavigationBar extends Component {
    render() {
        return(
           
            <Navbar className="justify-content-center" sticky="top" expand="lg">
                <Nav className="justify-content-center" variant="pills" >
					<ButtonToolbar>
						<Button variant="danger" size="lg" style={{margin:"15px 15px"}}>Home</Button>
						<Button variant="success" size="lg" style={{margin:"15px 15px"}}>Gallary</Button>
                        <Button variant="warning" size="lg" style={{margin:"15px 15px"}}>About Us</Button>
                        <Button variant="primary" size="lg" style={{margin:"15px 15px"}}>Contact Us</Button>
				   </ButtonToolbar>
                </Nav>
            </Navbar>
        )
    }
}

export default NavigationBar;