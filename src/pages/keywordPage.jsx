import React, {useEffect} from 'react';
import ProductList from "../components/product/productList.jsx";
import AuthLayout from "../components/layouts/authLayout.jsx";
import productListStore from "../store/productListStore.js";
import {useParams} from "react-router-dom";
import Footer from "../components/footer/footer.jsx";

const KeywordPage = () => {
    const {setProductSearch} = productListStore();
    const {keyword} = useParams();
    useEffect(()=>{
        (async ()=>{
            await setProductSearch(keyword);
        })()
    },[]);
    return (
        <div>
            <AuthLayout>
                <ProductList/>
                <Footer/>
            </AuthLayout>
        </div>
    );
};

export default KeywordPage;