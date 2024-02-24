import React from 'react';
import UpdateProduct from "../components/product/updateProduct.jsx";
import MasterLayout from "../components/layouts/authLayout.jsx";
import Footer from "../components/footer/footer.jsx";

const ProductUpdatePage = () => {

    return (
        <div>
            <MasterLayout>
                <UpdateProduct/>
                <Footer/>
            </MasterLayout>
        </div>
    );
};

export default ProductUpdatePage;