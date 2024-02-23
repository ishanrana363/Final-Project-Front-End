import React from 'react';
import UpdateProduct from "../components/product/updateProduct.jsx";
import MasterLayout from "../components/layouts/authLayout.jsx";

const ProductUpdatePage = () => {

    return (
        <div>
            <MasterLayout>
                <UpdateProduct/>
            </MasterLayout>
        </div>
    );
};

export default ProductUpdatePage;