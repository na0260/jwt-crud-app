import React from 'react';

const ProductCard = (props) => {
    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={props.image} alt={props.title}/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {props.title}
                        <div className="badge badge-secondary">{props.price} BDT</div>
                    </h2>
                    <p>{props.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{props.qty} pcs</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
