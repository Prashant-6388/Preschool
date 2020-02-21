import React, { Component } from 'react'
import {Jumbotron,Container} from 'react-bootstrap'

class Team extends Component {
    render() {
        return (
            <section className="bg-light page-section" id="team">
                <Jumbotron fluid
                    style={{textAlign:"center"}}
                    >
                    <Container>
                        <h1>Fluid jumbotron</h1>
                        <p>
                            This is a modified jumbotron that occupies the entire horizontal space of
                            its parent.
                        </p>
                        <p>
                            Add your details here
                        </p>
                    </Container>
                </Jumbotron>
            </section>
        )
    }
}

export default Team;