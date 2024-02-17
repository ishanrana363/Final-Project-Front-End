import axios from "axios";
import {setToken, setUserData} from "../helpers/SessionHelper.js";
import {errorToast, successToast} from "../helpers/fromHelper.js";

let baseUrl = `http://localhost:5500/api/v1`;

// registration

export const registration = (data) => {
        let url = `${baseUrl}/registration`;
        return axios.post(url,data).then((res)=>{
            if (res.data["status"]==="success"){
                return true;
            }else {
                return false;
            }
        }).catch((err)=>{
            console.log(err);
        })
};


export const otpVerification = (email,otpCode) => {
    let url = `${baseUrl}/otp-verify/${email}/${otpCode}`;
    return axios.get(url).then((res)=>{
        if (res.data["status"]==="success"){
            return true;
        }else {
            return false;
        }
    }).catch((err)=>{
        console.log(err);
    })
};

export const otpRegistrationLogin = (email,otpCode) => {
    let url = `${baseUrl}/otp/login/${email}/${otpCode}`;
    return axios.post(url).then((res)=>{
        if (res.data["status"]==="success"){
            setToken(res.data["token"])
            setUserData(res.data["data"])
            return true;
        }else {
            return false;
        }
    }).catch((err)=>{
        console.log(err);
    })
};

export const login = (data) => {
    let url = `${baseUrl}/login`;
    return axios.post(url,data).then((res)=>{
        if (res.data["status"]==="success"){
            setToken(res.data["token"]);
            setUserData(res.data["data"]);
            return true;
        }else if (res.data["status"]==="fail"){
            errorToast("User not found.");
        }else {
            errorToast("Something went worng!");
            return false;
        }
    }).catch((err)=>{
        console.log(err);
    })
};























