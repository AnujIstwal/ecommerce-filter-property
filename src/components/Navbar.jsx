import React, { useEffect, useState } from "react";

export default function Navbar({ handleOption }) {
    const [currProduct, setCurrProduct] = useState("all");
    const [currRating, setCurrRating] = useState("all");
    const [sort, setSort] = useState("name");

    useEffect(() => {
        handleOption({ product: currProduct, rating: currRating, sort: sort });
    }, [currProduct, currRating, sort]);

    return (
        <div className="flex gap-6 max-w-4xl h-16 shadow-lg mx-auto bg-rose-500 rounded-lg px-6">
            {/* Product Dropdown */}
            <div className="flex items-center space-x-4">
                <label htmlFor="product" className="text-white">
                    Product:
                </label>
                <select
                    id="product"
                    className="rounded-lg p-2 bg-white text-black"
                    value={currProduct}
                    onChange={(e) => setCurrProduct(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="earphone">Earphones</option>
                    <option value="headphone">HeadPhones</option>
                    <option value="speaker">Speakers</option>
                    <option value="watch">Watches</option>
                </select>
            </div>

            <div className="flex items-center space-x-4">
                <label htmlFor="rating" className="text-white">
                    Reviews:
                </label>
                <select
                    id="rating"
                    className="rounded-lg p-2 bg-white text-black"
                    value={currRating}
                    onChange={(e) => setCurrRating(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value=">4">&gt;4</option>
                    <option value=">3">&gt;3</option>
                </select>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-4">
                <label htmlFor="sort" className="text-white">
                    Sort:
                </label>
                <select
                    id="sort"
                    className="rounded-lg p-2 bg-white text-black"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="name">Name</option>
                    <option value="review">By Reviews</option>
                    <option value="price">By Cheapest</option>
                </select>
            </div>
        </div>
    );
}
