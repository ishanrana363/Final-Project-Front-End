import React, {useEffect, useState} from 'react';
import productListStore from "../../store/productListStore.js";
import {Link, useParams} from "react-router-dom";
import { IoIosCreate } from "react-icons/io";
import FullScreenLoder from "../layouts/FullScreenLoder.jsx";
import {updateProductDataAlert} from "../../helpers/updateAlert.js";
import {productDeleteAlert} from "../../helpers/deleteAlert.js";
import {deleteProductApi} from "../../apiRequest/api.js";
import { MdDelete } from "react-icons/md";



const ProductList = () => {
    const [loder, setLoder] = useState("d-none");
    const {productList,setProductList} = productListStore();
    useEffect(()=>{
        (async ()=>{
            setLoder("")
            await setProductList();
            setLoder("d-none")
        })()
    },[]);



    const deleteProductData = (id) => {
      productDeleteAlert(id).then(async (res)=>{
          if (res){
              setLoder("");
              await deleteProductApi(id);
              await setProductList();
              setLoder("d-none");
          }else {
              return false;
          }
      }).catch((e)=>{
          return false;
      })
    };
    return (
        <>
            <div className="ms-4">
                <div className="row">
                    {
                        productList.map((item, i) => {
                            return (
                                <div key={i}
                                     className="col-md-3 font-weight-light col-lg-3 w-auto h-100 col-sm-6 col-12 fst-italic fs-5 ">
                                    <div className="card w-auto  h-75 rounded-5  mt-5 ">
                                        <div className="card-body justify-content-center ">
                                            <img className="animated fadeInLeft rounded-5 ms-1 text-center  "
                                                 style={{width: "150px", height: "150px"}} src={item["img"]}/>
                                            <span className="animated fadeInRight d-block my-2 text-center  "> Product name : {item["productName"]} </span>
                                            <span
                                                className="animated d-block text-center  "> Brand name : {item["brandName"]} </span>
                                            <span className="animated d-block  my-2 fadeInRight text-center  ">Category name : {item["categoryName"]} </span>
                                            <span
                                                className="animated d-block text-center  ">Description : {item["description"]} </span>
                                            <div className="d-flex align-items-center justify-content-center ">
                                                <Link className=" "
                                                      to={`/product/update/${item["_id"]} `}
                                                      title={"update"}><IoIosCreate/></Link>
                                                <Link onClick={()=>deleteProductData.bind(this, item["_id"])}
                                                      className="ms-4 " to="" title={"delete"}><MdDelete/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <FullScreenLoder visibility={loder}/>
        </>
    );
};

export default ProductList;