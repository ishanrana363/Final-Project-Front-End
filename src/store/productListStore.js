import {create} from "zustand";
import {getToken} from "../helpers/SessionHelper.js";
import axios from "axios";


const config = {
    headers : {
        "token" : getToken()
    }
};
let baseUrl = `http://localhost:5500/api/v1`;


const productListStore = create((set)=>({
    productList : [],
    setProductList : ()=>{
        let url = `${baseUrl}/all/products`;
        return axios.get(url,config).then((res)=>{
            if (res.data["status"]==="success"){
                set({productList:res.data["data"]});
            }
        }).catch((err)=>{
            console.log(err);
        })
    },
    profileDetails: [],
    setProfileDetails :  ()=>{
        let url = `${baseUrl}/profile/details`
        return axios.get(url,config).then((res)=>{
            if (res.data.status==="success"){
                set({profileDetails:res.data.data})
            }else {
                return false
            }
        }).catch((err)=>{
            return false
        })
    },
}));






export default productListStore;

