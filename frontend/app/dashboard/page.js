import React from 'react';
import Navbar from "@/app/components/Navbar";

const Page = () => {
    return (
        <>
            <div className="container mx-auto">
                <Navbar/>
                <div className="lg:py-20 md:py-16 py-4">
                    <h1 className="text-4xl font-bold text-center my-4">Welcome to the Dashboard</h1>
                </div>
            </div>
        </>
    );
};

export default Page;
