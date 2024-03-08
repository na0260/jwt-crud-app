import React from 'react';

const ProductsTable = () => {
    return (
        <>
            <div className="w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Sn.</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>1</td>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png"
                                             alt="Avatar Tailwind CSS Component"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                            <br/>
                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>100</td>
                        <td>100</td>
                        <th>
                            <button className="btn btn-info btn-xs">Edit</button>
                            &nbsp;
                            &nbsp;
                            <button className="btn btn-error btn-xs">delete</button>
                        </th>
                    </tr>
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default ProductsTable;
