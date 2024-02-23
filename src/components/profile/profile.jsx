import {useEffect, useRef, useState} from 'react';
import productListStore from "../../store/productListStore.js";
import {errorToast, getBase64, isEmail, isEmpty, isMobile, successToast} from "../../helpers/fromHelper.js";
import FullScreenLoder from "../layouts/FullScreenLoder.jsx";
import {Toaster} from "react-hot-toast";
import {getUserData} from "../../helpers/SessionHelper.js";
import {profileUpdate} from "../../apiRequest/api.js";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    let emailRef,firstNameRef,mobileRef,passwordRef,userImgRef,userImgView=useRef();
    const [loder, setLoder] = useState("d-none");
    const {profileDetails,setProfileDetails} = productListStore();
    useEffect(()=>{
        (async ()=>{
            await setProfileDetails();
        })()
    },[])
    console.log(profileDetails)



    const imgPreview = () => {
        let imgFile = userImgRef.files[0]
        getBase64(imgFile).then((base64img)=>{
            userImgView.src = base64img
        })
    };
    const navigate = useNavigate();
    const updateMyProfile = async () =>{
        let email = emailRef.value;
        let name = firstNameRef.value;
        let mobile = mobileRef.value;
        let password = passwordRef.value;
        let photo = userImgView.src;
        if (isEmail(email)){
            errorToast("Provide your email");
        }else if (isEmpty(name)){
            errorToast("Name required");
        }else if (!isMobile(mobile)){
            errorToast("Mobile number required");
        }else if (isEmpty(password)){
            errorToast("Password required");
        }else if (isEmpty(photo)){
            errorToast('img required')
        }else {
            setLoder("");
            let res = await profileUpdate(email,name,mobile,password,photo);
            setLoder("d-none");
            if (res){
                navigate("/")
                successToast("Profile update successfully");
            }else {
                errorToast("something went worng");
            }
        }
    }
    return (
        <>
            <>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="container-fluid">
                                        <img ref={(input) => userImgView = input}  className="icon-nav-img-lg"
                                             src={profileDetails.img} alt=""/>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-4 p-2">
                                                <label>Profile Picture</label>
                                                <input onChange={imgPreview}
                                                       ref={(input)=> userImgRef=input }
                                                       placeholder=" User Img " className="form-control animated fadeInUp"
                                                       type="file"/>
                                            </div>
                                            <div className="col-4 p-2">
                                                <label>Email Address</label>
                                                <input ref={ (input)=> emailRef = input }
                                                       key={Date.now()} defaultValue={profileDetails['email']} readOnly={true}
                                                       placeholder="User Email"
                                                       className="form-control animated fadeInUp" type="email"/>
                                            </div>
                                            <div className="col-4 p-2">
                                                <label>First Name</label>
                                                <input ref={ (input)=> firstNameRef = input }
                                                       key={Date.now()} defaultValue={getUserData()['name']}
                                                       placeholder="First Name"
                                                       className="form-control animated fadeInUp" type="text"/>
                                            </div>
                                            <div className="col-4 p-2">
                                                <label>Mobile</label>
                                                <input ref={ (input)=> mobileRef = input }
                                                       key={Date.now()} defaultValue={getUserData()['mobile']}
                                                       placeholder="Mobile"
                                                       className="form-control animated fadeInUp" type="mobile"/>
                                            </div>
                                            <div className="col-4 p-2">
                                                <label>Password</label>
                                                <input ref={ (input)=> passwordRef = input }
                                                       key={Date.now()} defaultValue={getUserData()['password']}
                                                       placeholder="User Password"
                                                       readOnly={true}
                                                       className="form-control animated fadeInUp" type="password"/>
                                            </div>
                                            <div className=" p-2">
                                                <button onClick={updateMyProfile}
                                                        className="btn w-25  btn-primary animated fadeInUp">Update
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FullScreenLoder visibility = {loder} />
                <Toaster position="top-center"/>
            </>
        </>
    );
};

export default Profile;