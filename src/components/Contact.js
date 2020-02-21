import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/fontawesome-free-solid'

class contact extends Component {
    render() {
        return (
            <div id="contact" className="sections lightbg">
                <div className="container">

                    <h3 className="text-center text-uppercase">contact us</h3>
                    <p className="text-center w-75 m-auto">Currently we have our corporat
				                    office at PUNE, Maharashtra</p>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4 my-5">
                            <div className="card border-0">
                                <div className="card-body text-center">
                                    <FontAwesomeIcon icon={faPhone} size="3x" />
                                    <br/>
                                    <p>+91 9860437293,+91 9958087486</p>
                                </div> 
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 my-5">
                            <div className="card border-0">
                                <div className="card-body text-center">
                                    <FontAwesomeIcon icon="map-marker-alt" size="3x" />
                                    <br/>
                                    <p>Spectacular engineer pvt. Ltd. Vihana
								apartment, Mundhawa,Pune-411036</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 my-5">
                            <div className="card border-0">
                                <div className="card-body text-center">
                                    <FontAwesomeIcon icon="envelope" size="3x" />
                                    <br/>
                                    <p>mep@sepl-opc.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default contact;