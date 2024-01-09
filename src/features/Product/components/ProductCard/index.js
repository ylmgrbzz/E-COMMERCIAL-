import React from "react";
import ProductCard from "./ProductCard";
import { product } from "../../data/ProductCard";

function ShopProductCard() {
  return (
    <div className="lg:px-48 sm:px-10 py-20 bg-alabaster-50">
      <div className="">
        <p className="font-extrabold pb-2 text-center sm:text-start text-xl ">
          BESTSELLER PRODUCTS
        </p>
        <p className="w-full h-1 bg-gray-200 "></p>
      </div>
      <div className=" grid lg:grid-cols-4 gap-4 sm:grid-cols-1 ">
        {product.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default ShopProductCard;
