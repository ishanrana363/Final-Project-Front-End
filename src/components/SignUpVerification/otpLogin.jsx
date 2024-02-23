import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {errorToast, isEmail, isEmpty, successToast} from "../../helpers/fromHelper.js";
import {Toaster} from "react-hot-toast";
import FullScreenLoder from "../layouts/FullScreenLoder.jsx";
import {otpLoginApi} from "../../apiRequest/api.js";

const OtpLogin = () => {
    const [loder, setLoder] = useState("d-none");
    const [data, setData] = useState({
        email:"",
        otp : ""
    });
    let {email,otp} = data;
    const getInputValue = (name,value) => {
        setData((prev)=>({
            ...prev,
            [name] : value
        }))
    };
    const navigate = useNavigate();
    const resetPassword = async () => {
        if (isEmail(email)){
            errorToast("Required email");
        }else if (isEmpty(otp)){
            errorToast("Provide your otp code");
        }
        else {
            setLoder("");
            let res = await otpLoginApi(email,otp)
            setLoder("d-none");
            if (res){
                navigate("/");
                successToast("Verification success");
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
                                    <h4 className="animated fadeInUp ">Login</h4>
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
                                            getInputValue("otp", e.target.value)}}
                                        placeholder=" Otp" className="form-control animated fadeInRight"
                                        type="number"/>
                                    <br/>

                                    <button onClick={resetPassword}
                                            className="btn w-100 animated fadeInDown float-end btn-primary">Login
                                    </button>
                                    <hr/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Toaster position="top-center"/>
                <FullScreenLoder visibility={loder}/>
            </>
        </div>
    );
};

export default OtpLogin;