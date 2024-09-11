import React from "react";
import { productDetails } from "../utility/helper";
import ProductItem from "./ProductItem";

export default function Product({ productToShow }) {
    const { product, rating, sort } = productToShow;
    let productList1 = productDetails;

    //product filter
    if (product === "headphone") {
        productList1 = productList1.filter(
            (product) => product.category === "headphone"
        );
    } else if (product === "earphone") {
        productList1 = productList1.filter(
            (product) => product.category === "earphone"
        );
    } else if (product === "speaker") {
        productList1 = productList1.filter(
            (product) => product.category === "speaker"
        );
    } else if (product === "watch") {
        productList1 = productList1.filter(
            (product) => product.category === "watch"
        );
    } else {
        productList1 = productDetails;
    }

    let productList2 = productList1;

    //rating filter
    if (rating === ">4") {
        productList2 = productList2.filter((product) => product.rating > 4);
    } else if (rating === ">3") {
        productList2 = productList2.filter((product) => product.rating > 3);
    } else {
        productList2 = productList1;
    }

    let productList3 = productList2;
    //sort
    if (sort === "review") {
        productList3 = productList3.sort((a, b) => b.reviews - a.reviews);
    } else if (sort === "price") {
        productList3 = productList3.sort((a, b) => a.price - b.price);
    } else {
        productList3 = productList2.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    return (
        <div className="products-container bg-white mx-auto max-w-4xl p-6 rounded-xl">
            {productList3.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}
