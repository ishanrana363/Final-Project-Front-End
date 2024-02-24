import React, {useState} from 'react';
import FullScreenLoder from "../layouts/FullScreenLoder.jsx";
import {Toaster} from "react-hot-toast";
import {errorToast, getBase64, successToast} from "../../helpers/fromHelper.js";
import {updateProductApi} from "../../apiRequest/api.js";
import {useNavigate, useParams} from "react-router-dom";
import {updateProductDataAlert} from "../../helpers/updateAlert.js";

const UpdateProduct = () => {
    const [loder, setLoder] = useState("d-none")
    const [data, setData] = useState({
        productName : "",
        brandName : "",
        categoryName : "",
        description:"",
        img : ""
    });

    const {productName,brandName,categoryName,description,img} = data;
    const getProductValue = (name,value) => {
        setData((prev)=>({
            ...prev,
            [name] : value
        }))
    }
    const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        getBase64(file).then((base64Img) => {
            setData({
                ...data,
                img: base64Img
            });
        });
    }
};
    const {id} = useParams();
    const navigate = useNavigate();
    const updateProductData = async () => {
        await updateProductDataAlert(id,data).then(async (res)=>{
            if (res){
                setLoder("");
                let resApi = await updateProductApi(id,data);
                setLoder("d-none");
                if (resApi){
                    navigate("/")
                    successToast("Product update successfully");
                }else {
                    errorToast("something went worng");
                }
            }else {
                errorToast("Product update fail")
            }
        }).catch((e)=>{
            return false;
        })
    }


    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="container-fluid">
                                    <hr/>
                                    <div className="row">
                                        <div className="col-4 p-2">
                                            <label>ProductName</label>
                                            <input
                                                value={productName}
                                                onChange={(e)=>{getProductValue("productName",e.target.value)}}
                                                placeholder="product name"
                                                className="form-control animated fadeInUp" type="text"/>
                                        </div>
                                        <div className="col-4 p-2">
                                            <label>Brand Name </label>
                                            <input
                                                value={brandName}
                                                onChange={(e)=>{getProductValue("brandName",e.target.value)}}
                                                placeholder="Brand Name"
                                                className="form-control animated fadeInUp" type="text"/>
                                        </div>
                                        <div className="col-4 p-2">
                                            <label>Category Name</label>
                                            <input
                                                value={categoryName}
                                                onChange={(e)=>{getProductValue("categoryName",e.target.value)}}
                                                placeholder="Category Name"
                                                className="form-control animated fadeInUp" type="text"/>
                                        </div>
                                        <div className="col-4 p-2">
                                            <label>Description</label>
                                            <input
                                                value={description}
                                                onChange={(e)=>{getProductValue("description",e.target.value)}}
                                                placeholder="Description"
                                                className="form-control animated fadeInUp" type="text"/>
                                        </div>
                                        <div className="col-4 p-2">
                                            <label>Img</label>
                                            <input
                                                onChange={handleImageChange}
                                                placeholder="Img" className="form-control animated fadeInUp"
                                                type="file"/>
                                        </div>
                                        <div className="p-2 d-flex ">
                                            <button onClick={updateProductData}
                                                    className="btn w-25  float-end btn-primary animated fadeInUp">Update
                                            </button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FullScreenLoder visibility={loder}/>
            <Toaster position="top-center"/>
        </>
    );
};

export default UpdateProduct;