import axios from "axios";
import {getToken, setToken, setUserData} from "../helpers/SessionHelper.js";
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
            return false;
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
        return false;
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
        return false;
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
        return false;
    })
};


const config = {
    headers : {
        "token" : getToken()
    }
};


export const createProduct = (data) => {
  let url = `${baseUrl}/create/product`;
  let postBody = data;
  return axios.post(url,postBody,config).then((res)=>{
      if (res.data["status"]==="success"){
          return true;
      }else {
          return false;
      }
  }).catch((err)=>{
      return false;
  })
};


export const profileUpdate = (email,name,mobile,password,photo) => {
    let url = `${baseUrl}/update`;
    let postBody = {email:email,name:name,password:password,img:photo};
    let userData = {email:email,name:name,mobile:mobile,password:password,img: photo}
    return axios.put(url,postBody,config).then((res)=>{
        if (res.data["status"]==="success"){
            setUserData(userData)
            return true;
        }else {
            return false;
        }
    }).catch((err)=>{
        return false;
    })
};

export const updateProductApi = (id,data) => {
    let url = `${baseUrl}/update/product/${id}`;
    let postBody = data;
    return axios.put(url,postBody,config).then((res)=>{
        if (res.data["status"]==="success"){
            return true;
        }else {
            return false;
        }
    }).catch((err)=>{
        return false;
    })
};

export const deleteProductApi = (id) => {
    let url = `${baseUrl}/delete/product/${id}`;
    return axios.delete(url,config).then((res)=>{
        if (res.data["status"]==="success"){
            return true;
        }else {
            return false;
        }
    }).catch((err)=>{
        return false;
    })
};

export const sendEmailApi = (email) => {
    let url = `${baseUrl}/send/otp/${email}`;
    return axios.get(url).then((res)=>{
        if (res.data["status"]==="success"){
            return true;
        }else {
            return false;
        }
    }).catch((err)=>{
        return false;
    })
};

export const otpVerifyApi = (email,otp) => {
    let url = `${baseUrl}/verify/otp/${email}/${otp}`;

    return axios.get(url).then((res)=>{
        if (res.data["status"]==="success"){
            return true;
        }else {
            return false;
        }
    }).catch((err)=>{
        return false;
    })

};


export const resetPasswordApi = (data) => {
   let url = `${baseUrl}/reset/password`;
   let postBody = data;
   return axios.post(url,postBody).then((res)=>{
       if (res.data["status"]==="success"){
           return true;
       }else {
           return false;
       }
   }).catch((err)=>{
       return false;
   })

};

export const otpLoginApi = (email,otp) => {
    let url = `${baseUrl}/otp/login/${email}/${otp}`;
    return axios.post(url).then((res)=>{
        if (res.data["status"]==="success"){
            return true;
        }else {
            return false;
        }
    }).catch((err)=>{
        return false;
    })

};











