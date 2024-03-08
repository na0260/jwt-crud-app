import React from 'react';
import ProductCard from "@/app/components/ProductCard";

const ProductList = () => {
    return (
        <>
            <div className="lg:py-20 md:py-16 py-4">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
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
