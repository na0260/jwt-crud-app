import React from 'react';
import ProductCard from "@/app/components/ProductCard";

const ProductList = () => {
    return (
        <>
            <div className="lg:py-20 md:py-16 py-4">
                <div className="grid grid-cols-4 gap-4">
                    <ProductCard title="Product 1" price="100" description="This is a product description" qty="10"
                                 image="https://via.placeholder.com/150"/>
                    <ProductCard title="Product 1" price="100" description="This is a product description" qty="10"
                                 image="https://via.placeholder.com/150"/>
                    <ProductCard title="Product 1" price="100" description="This is a product description" qty="10"
                                 image="https://via.placeholder.com/150"/>
                    <ProductCard title="Product 1" price="100" description="This is a product description" qty="10"
                                 image="https://via.placeholder.com/150"/>
                </div>
            </div>
        </>
    );
};

export default ProductList;
