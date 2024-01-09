import React from "react";
import ProductCard from "./ProductCard";
import { productData } from "../../data/ProductCard";
function index() {
  return (
    <div className="lg:px-48 sm:px-10 py-20">
      <div className="grid  justify-items-center">
        <p className="text-white-600 pb-2">Featured Products</p>
        <p className="font-extrabold pb-2 ">BESTSELLER PRODUCTS</p>
        <p className="text-white-600">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className=" grid lg:grid-cols-4 gap-4 sm:grid-cols-1 ">
        {productData.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default index;
