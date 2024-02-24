import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="container mt-5 mb-5 " >
                <div className="card">
                    <div className="card-body" >
                        <div className="row   ">
                            <div className="col-md-4 col-sm-10 ">
                                <h2> Services </h2>
                                <nav>
                                    <ul>
                                        <li><Link to="">Branding</Link></li>
                                        <li><Link to="">Design</Link></li>
                                        <li><Link to="">Markting</Link></li>
                                        <li><Link to="">Advertisment</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-md-4 col-sm-10 ">
                                <h2> Company </h2>
                                <nav>
                                    <ul>
                                        <li><Link to="">About Us</Link></li>
                                        <li><Link to="">Contact</Link></li>
                                        <li><Link to="">Jobs</Link></li>
                                        <li><Link to="">Press kit</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-md-4 col-sm-10 ">
                                <h2> Legal </h2>
                                <nav>
                                    <ul>
                                        <li><Link to="">Terms of user</Link></li>
                                        <li><Link to="">Privacy policy</Link></li>
                                        <li><Link to="">Cookie policy</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;