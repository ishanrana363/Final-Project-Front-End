import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {errorToast, isEmail, successToast} from "../../helpers/fromHelper.js";
import {Toaster} from "react-hot-toast";
import FullScreenLoder from "../layouts/FullScreenLoder.jsx";
import {resetPasswordApi} from "../../apiRequest/api.js";

const PasswordSet = () => {
    const [loder, setLoder] = useState()
    const [data, setData] = useState({
        email:"",
        otp:"",
        newPassword:"",
        password : ""
    });
    let {email,otp,newPassword,password} = data;
    const getInputValue = (name,value) => {
        setData((prev)=>({
            ...prev,
            [name] : value
        }))
    };
    const resetPassword = async () => {
        if (isEmail(email)){
            errorToast("Required email");
        }else  if (password!==newPassword){
            errorToast("password & confirm password not match.");
        }else {
            setLoder("");
            let res = await resetPasswordApi(data);
            setLoder("d-none");
            if (res){
                successToast("new password set successfully");
            }else {
                errorToast("something went worng.");
            }
        }
    };
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
                                        value={email}
                                        onChange={(e) => {
                                            getInputValue("email", e.target.value)
                                        }}
                                        placeholder="User Email" className="form-control animated fadeInLeft"
                                        type="email"/>
                                    <br/>
                                    <label>Otp</label>
                                    <input
                                        value={otp}
                                        onChange={(e) => {
                                            getInputValue("otp", e.target.value)
                                        }}
                                        placeholder="User Password" className="form-control animated fadeInRight"
                                        type="number"/>
                                    <br/>
                                    <label>Password</label>
                                    <input
                                        value={password}
                                        onChange={(e) => {
                                            getInputValue("password", e.target.value)
                                        }}
                                        placeholder="User Password" className="form-control animated fadeInRight"
                                        type="password"/>
                                    <br/>
                                    <label>Confirm password</label>
                                    <input
                                        value={newPassword}
                                        onChange={(e) => {
                                            getInputValue("newPassword", e.target.value)
                                        }}
                                        placeholder="Confirm password" className="form-control animated fadeInLeft"
                                        type="password"/>
                                    <br/>
                                    <button onClick={resetPassword}
                                            className="btn w-100 animated fadeInDown float-end btn-primary">Change
                                        password
                                    </button>
                                    <hr/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Toaster position="top-center"/>
                <FullScreenLoder visibility = {loder} />
            </>
        </div>
    );
};

export default PasswordSet;