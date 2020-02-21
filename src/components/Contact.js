import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/fontawesome-free-solid'

class contact extends Component {
    render() {
        return (
            <div id="contact" className="sections lightbg">
                <div className="container">
                    <div style={{backgroundColor:"white", marginBottom:"30px"}}>
                        <div>
                            <h3 className="text-center text-uppercase" style={{paddingTop:"30px"}}>contact us</h3>
                            <p className="text-center w-75 m-auto">Currently we have our corporat
                                            office at PUNE, Maharashtra</p>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-4 my-5">
                                <div className="card border-0">
                                    <div className="card-body text-center">
                                        <FontAwesomeIcon icon={faPhone} size="3x" />
                                        <br />
                                        <p style={{marginTop:"20px"}}>+91 9860437293,+91 9958087486</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 my-5">
                                <div className="card border-0">
                                    <div className="card-body text-center">
                                        <FontAwesomeIcon icon="map-marker-alt" size="3x" />
                                        <br />
                                        <p style={{marginTop:"20px"}}>Spectacular engineer pvt. Ltd. Vihana
								apartment, Mundhawa,Pune-411036</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 my-5">
                                <div className="card border-0">
                                    <div className="card-body text-center">
                                        <FontAwesomeIcon icon="envelope" size="3x" />
                                        <br />
                                        <p style={{marginTop:"20px"}}>mep@sepl-opc.com</p>
                                    </div>
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