import React, {useState} from 'react';
import {errorToast, getBase64, isEmpty, successToast} from "../../helpers/fromHelper.js";
import FullScreenLoder from "../layouts/FullScreenLoder.jsx";
import {Toaster} from "react-hot-toast";
import {createProduct} from "../../apiRequest/api.js";
import {useNavigate} from "react-router-dom";

const CreateProduct = () => {
    const [loder, setLoder] = useState("d-none");
    const [data, setData] = useState({
        productName : "",
        brandName : "",
        categoryName : "",
        description : "",
        img : ""
    });
    const {productName,brandName,categoryName,description,img} = data;
    const onInputValue = (name,value) => {
        setData((prev)=>({
            ...prev,
            [name] : value
        }))
    };
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
const navigate = useNavigate();
    const createProductData = async  () => {
        if (isEmpty(productName)){
            errorToast("Product name required.");
        }else if (isEmpty(brandName)){
            errorToast("Brand name required.");
        }else if (isEmpty(categoryName)){
            errorToast("Category name required");
        }else if (isEmpty(description)){
            errorToast("Description name required");
        }else if (isEmpty(img)){
            errorToast("img required");
        }else {
            setLoder("");
            let res = await  createProduct(data);
            setLoder("d-none");
            if (res){
                navigate("/")
                successToast("Product create successfully");
            }else {
                errorToast("Something went worng!");
            }
        }
    };
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
                                                <input value={productName}
                                                       onChange={(e)=>{onInputValue("productName",e.target.value)}}
                                                       placeholder="product name"
                                                       className="form-control animated fadeInUp" type="text"/>
                                            </div>
                                            <div className="col-4 p-2">
                                                <label>Brand Name </label>
                                                <input value={brandName}
                                                       onChange={(e)=>{onInputValue("brandName",e.target.value)}}
                                                       placeholder="Brand Name"
                                                       className="form-control animated fadeInUp" type="text"/>
                                            </div>
                                            <div className="col-4 p-2">
                                                <label>Category Name</label>
                                                <input value={categoryName}
                                                       onChange={(e)=>{onInputValue("categoryName",e.target.value)}}
                                                       placeholder="Category Name"
                                                       className="form-control animated fadeInUp" type="text"/>
                                            </div>
                                            <div className="col-4 p-2">
                                                <label>Description</label>
                                                <input value={description}
                                                       onChange={(e)=>{onInputValue("description",e.target.value)}}
                                                       placeholder="Description"
                                                       className="form-control animated fadeInUp" type="text"/>
                                            </div>
                                            <div className="col-4 p-2">
                                                <label>Img</label>
                                                <input onChange={handleImageChange}
                                                       placeholder="Img" className="form-control animated fadeInUp"
                                                       type="file"/>
                                            </div>
                                            <div className="p-2 d-flex ">
                                                <button onClick={createProductData}
                                                    className="btn w-25  float-end btn-primary animated fadeInUp">Create
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
                <Toaster position="top-center" />
            </>
    );
};

export default CreateProduct;