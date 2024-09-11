import React from "react";
import { productDetails } from "../utility/helper";
import ProductItem from "./ProductItem";

export default function Product({ productToShow }) {
    const { product, rating, sort } = productToShow;
    let productList = productDetails;

    //product filter
    if (product === "headphone") {
        productList = productList.filter(
            (product) => product.category === "headphone"
        );
    } else if (product === "earphone") {
        productList = productList.filter(
            (product) => product.category === "earphone"
        );
    } else if (product === "speaker") {
        productList = productList.filter(
            (product) => product.category === "speaker"
        );
    } else if (product === "watch") {
        productList = productList.filter(
            (product) => product.category === "watch"
        );
    } else {
        productList = productDetails;
    }

    //rating filter
    if (rating === ">4") {
        productList = productList.filter((product) => product.rating > 4);
    } else if (rating === ">3") {
        productList = productList.filter((product) => product.rating > 3);
    } else {
        productList = productDetails;
    }

    //sort
    if (sort === "review") {
        productList = productList.sort((a, b) => b.reviews - a.reviews);
    } else if (sort === "price") {
        productList = productList.sort((a, b) => a.price - b.price);
    } else if (sort === "name") {
        productList = productList.sort((a, b) => a.name.localeCompare(b.name));
    }

    return (
        <div className="products-container bg-white mx-auto max-w-4xl p-6 rounded-xl">
            {productList.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}
