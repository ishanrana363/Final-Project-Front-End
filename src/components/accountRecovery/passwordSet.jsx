import React from 'react';
import {Link} from "react-router-dom";

const PasswordSet = () => {
    return (
        <div>
            <>
                <div className="container ">
                    <div className="row justify-content-center "  >
                        <div className="col-md-7 col-lg-6 center-screen " >
                            <div className="card w-90  p-4"  >
                                <div className="card-body ">
                                    <h4 className="animated fadeInUp ">Set new password</h4>
                                    <br/>
                                    <label>Email</label>
                                    <input
                                        placeholder="User Email" className="form-control animated fadeInLeft"
                                        type="email"/>
                                    <br/>
                                    <label>Password</label>
                                    <input placeholder="User Password" className="form-control animated fadeInRight"
                                           type="password"/>
                                    <br/>
                                    <label>Confirm password</label>
                                    <input placeholder="Confirm password" className="form-control animated fadeInLeft" type="password"/>
                                    <br/>
                                    <button className="btn w-100 animated fadeInDown float-end btn-primary">Change password
                                    </button>
                                    <hr/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default PasswordSet;