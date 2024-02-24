import React from 'react';
import ProductList from "../components/product/productList.jsx";
import MasterLayout from "../components/layouts/authLayout.jsx";
import Footer from "../components/footer/footer.jsx";

const ProductListPage = () => {
    return (
        <div>
           <MasterLayout>
               <ProductList/>
               <Footer/>
           </MasterLayout>
        </div>
    );
};

export default ProductListPage;