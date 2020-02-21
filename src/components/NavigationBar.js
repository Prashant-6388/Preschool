import React, { Component } from 'react'
import { Navbar, Nav, Button, ButtonToolbar } from 'react-bootstrap';

class NavigationBar extends Component {
    render() {
        return(
           
                
                <Nav className="justify-content-center" variant="pills" >
					<ButtonToolbar>
						<Button variant="danger" style={{margin:"15px 15px"}}>Home</Button>
						<Button variant="success" style={{margin:"15px 15px"}}>Gallary</Button>
				   </ButtonToolbar>
                </Nav>
        )
    }
}

export default NavigationBar;