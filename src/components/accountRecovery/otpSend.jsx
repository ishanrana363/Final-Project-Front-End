import {useState} from "react";
import {errorToast, isEmail, successToast} from "../../helpers/fromHelper.js";
import {Toaster} from "react-hot-toast";
import FullScreenLoder from "../layouts/FullScreenLoder.jsx";
import {sendEmailApi} from "../../apiRequest/api.js";
import {useNavigate} from "react-router-dom";


const OtpSend = () => {
    const [loder, setLoder] = useState("d-none");
    const [data, setData] = useState({
        email : ""
    });
    const {email} = data;
    const getEmailValue = (name,value) => {
        setData((prev)=>({
            ...prev,
            [name] : value
        }));
    };
    const navigate = useNavigate();
    let submitOtp = async ()=>{
        if (isEmail(email)){
            errorToast("Email required");
        }else {
            setLoder("");
            let res = await sendEmailApi(email);
            setLoder("d-none");
            if (res){
                navigate("/otp/verify");
                successToast("otp send successfully in your email address.");
            }else {
                errorToast("something went worng!");
            }
        }
    };
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90  p-4">
                            <div className="card-body">
                                <h4 className="animated fadeInUp mb-3 " > Send otp </h4>
                                <input value={email}
                                       onChange={(e)=>{ getEmailValue("email",e.target.value) }}
                                       required={true} placeholder="Email" type="email"  className="form-control animated fadeInLeft  "
                                />
                                <br/>
                                <button onClick={submitOtp}
                                        className="btn w-100 animated fadeInDown mb-5 float-end btn-primary">Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position="bottom-left  "/>
            <FullScreenLoder visibility = {loder} />
        </>
    );
};

export default OtpSend;