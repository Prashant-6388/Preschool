import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import config from './config.js'

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: "",
            phone: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.load = this.load.bind();
    }

    load(callback) {
        window.gapi.client.load("sheets", "v4", () => {
            window.gapi.client.sheets.spreadsheets.values
                .get({
                    spreadsheetId: config.spreadsheetId,
                    range: "Sheet1!A4:T"
                })
                .then(
                    response => {
                        const data = response.result.values;
                        const cars = data.map(car => ({
                            year: car[0],
                            make: car[1],
                            model: car[2]
                        })) || [];
                        callback({
                            cars
                        });
                    },
                    response => {
                        callback(false, response.result.error);
                    }
                );
        });
    }

    initClient = () => {
        // 2. Initialize the JavaScript client library.
        window.gapi.client
            .init({
                apiKey: config.apiKey,
                // Your API key will be automatically added to the Discovery Document URLs.
                discoveryDocs: config.discoveryDocs
            })
            .then(() => {
                // 3. Initialize and make the API request.
                this.load(this.onLoad);
            });
    };

    
    
    componentDidMount() {
        // 1. Load the JavaScript client library.
        window.gapi.load("client", this.initClient);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("form submitted")
    }

    updateValue(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <Container style={{ textAlign: "center" }}>
                <div style={{ marginBottom: "30px", backgroundColor: "white" }} >
                    <form id="contact-form" method="POST" onSubmit={this.handleSubmit}
                        style={{ margin: "0px 40px", width: "80%", paddingTop: "40px", paddingBottom: "40px" }}
                    >
                        <div className="form-group" >
                            <label htmlFor="name"><b>Name</b></label>
                            <input type="text" name="name" className="form-control"
                                value={this.state.name} onChange={this.updateValue} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"><b>Email address</b></label>
                            <input type="email" name="email" className="form-control" aria-describedby="emailHelp"
                                value={this.state.email} onChange={this.updateValue} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPhone"><b>Contact Number</b></label>
                            <input type="number" name="phone" className="form-control"
                                value={this.state.phone} onChange={this.updateValue} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message"><b>Message</b></label>
                            <textarea className="form-control" name="message" rows="2"
                                value={this.state.message} onChange={this.updateValue}>
                            </textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </Container>
        )
    }
}

export default ContactForm;