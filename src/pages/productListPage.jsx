import React from 'react';
import ProductList from "../components/product/productList.jsx";
import MasterLayout from "../components/layouts/authLayout.jsx";

const ProductListPage = () => {
    return (
        <div>
           <MasterLayout>
               <ProductList/>
           </MasterLayout>
        </div>
    );
};

export default ProductListPage;