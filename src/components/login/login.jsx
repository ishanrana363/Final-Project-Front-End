import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {errorToast, isEmail, isEmpty, successToast} from "../../helpers/fromHelper.js";
import {Toaster} from "react-hot-toast";
import {login} from "../../apiRequest/api.js";


const Login = () => {
    const [loder, setLoder] = useState("d-none");
    const [data, setData] = useState({
        email : "",
        password : "",
        confirmPassword : ""
    });
    const {email,password,confirmPassword} = data;
    const onGetInputValue = (name,value)=>{
        setData((prev)=>({
            ...prev,
            [name] : value
        }))
    };
    const navigate = useNavigate();

    const onSubmitValue = async () => {
      if (isEmail(email)){
          errorToast("Please provide your email!");
      }else if (isEmpty(password)){
          errorToast("Please provide your password!");
      }else if (isEmpty(confirmPassword)){
          errorToast("Please provide your confirm password!");
      }else if (password!==confirmPassword){
          errorToast("Your password & confirm password not match! Please provide valid password.");
      }else {
          setLoder("")
          let res = await login(data);
          setLoder("d-none");
          if (res){
              successToast("Login successfully");
              window.location.href = "/"
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
                                <h4 className="animated fadeInUpBig ">SIGN IN</h4>
                                <br/>
                                <label> Email </label>
                                <input value={email} onChange={(e)=>{onGetInputValue("email",e.target.value)}}
                                    placeholder="User Email" className="form-control animated fadeInLeftBig"
                                    type="email"/>
                                <br/>
                                <label> Password </label>
                                <input value={password} onChange={(e)=>{onGetInputValue("password",e.target.value)}}
                                    placeholder="User Password" className="form-control animated fadeInRight"
                                    type="password"/>
                                <br/>
                                <label> Confirm password </label>
                                <input value={confirmPassword} onChange={(e)=>{onGetInputValue("confirmPassword",e.target.value)}}
                                    placeholder="User Password" className="form-control animated fadeInRight"
                                    type="password"/>
                                <br/>
                                <button onClick={onSubmitValue} className="btn w-100 animated fadeInDownBig float-end btn-primary">Next</button>
                                <hr/>
                                <div className="float-end mt-3">

                                    <span>
                                        <Link className="text-center ms-3 h6   " to="/Registration">Sign Up </Link>
                                        <span className="ms-1">|</span>
                                        <Link className="text-center ms-3 h6  " to="/otp/send">Forget Password</Link>
                                    </span>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position="top-center"/>
        </>
    );
};
export default Login;
