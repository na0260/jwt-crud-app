import React from 'react';
import Navbar from "@/app/components/Navbar";
import ProductsTable from "@/app/components/ProductsTable";

const Page = () => {
    return (
        <>
            <div className="container mx-auto">
                <Navbar/>
                <div className="lg:py-20 md:py-16 py-4">
                    <div className="float-end">
                        <button className="btn btn-accent">Add Product</button>
                    </div>
                    <br/>
                    <ProductsTable/>
                </div>
            </div>
        </>
    );
};

export default Page;
