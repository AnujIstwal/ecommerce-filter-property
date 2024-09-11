import React from "react";

export default function ProductItem({ product }) {
    const { name, price, image, reviews, rating } = product;
    return (
        <>
            <div className="product-card">
                <img
                    src={image}
                    width={200}
                    height={200}
                    className="product-image"
                />
                <div className="flex justify-between">
                    <div>
                        <p className="product-name">{name}</p>
                        <p className="product-price">₹{price}</p>
                    </div>
                    <div className="flex flex-col items-center space-x-2 mt-2">
                        <p className="text-yellow-500 font-semibold">
                            {rating}★
                        </p>
                        <p className="text-gray-500 text-xs">
                            ({reviews} reviews)
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
