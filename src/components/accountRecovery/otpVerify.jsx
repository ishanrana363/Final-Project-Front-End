import React, {useState} from 'react';
import {errorToast, isEmail, isEmpty, successToast} from "../../helpers/fromHelper.js";
import {otpVerification, otpVerifyApi} from "../../apiRequest/api.js";
import FullScreenLoder from "../layouts/FullScreenLoder.jsx";
import {Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const OtpVerify = () => {
    const [loder, setLoder] = useState("d-none");
    const [data, setData] = useState({
        email : '',
        otpCode : ""
    });

    const {email,otpCode} = data;
    let getOtpInputValue = (name,value)=>{
        setData((prev)=>({
            ...prev,
            [name] : value
        }))
    };
    const navigate = useNavigate();
    const onSubmitOtpValue = async () => {
        if (isEmail(email)){
            errorToast("Please provide your email!");
        }else if (isEmpty(otpCode)){
            errorToast("Please provide your otp code!");
        }else {
            setLoder("")
            let res = await otpVerifyApi(email,otpCode);
            setLoder("d-none");
            if (res){
                navigate("/set-password")
                successToast("Otp verification successfully");
            }else {
                errorToast("Something went worng");
            }
        }

    };
    return (
            <>
                <div className="container ">
                    <div className="row justify-content-center "  >
                        <div className="col-md-7 col-lg-6 center-screen " >
                            <div className="card w-90  p-4"  >
                                <div className="card-body ">
                                    <h4 className="animated fadeInUpBig "> Otp verify </h4>
                                    <br/>
                                    <label>Email</label>
                                    <input value={email}  onChange={(e)=>{getOtpInputValue("email",e.target.value)}}
                                        placeholder="User Email" className="form-control animated fadeInLeftBig" type="email"/>
                                    <br/>
                                    <label>Otp code</label>
                                    <input value={otpCode}  onChange={(e)=>{getOtpInputValue("otpCode",e.target.value)}}
                                        placeholder="Otp code" className="form-control animated fadeInRight" type="number"/>
                                    <br/>
                                    <button onClick={onSubmitOtpValue} className="btn w-100 animated fadeInDownBig float-end btn-primary">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FullScreenLoder visibility = {loder} />
                <Toaster position="top-center"/>
            </>
    );
};

export default OtpVerify;