import React from 'react';
import MasterLayout from "../components/layouts/authLayout.jsx";
import CreateProduct from "../components/product/createProduct.jsx";

const CreateProductPage = () => {
    return (
        <div>
            <MasterLayout>
                <CreateProduct/>
            </MasterLayout>
        </div>
    );
};

export default CreateProductPage;