import React from "react";
import Photo1 from "../../assets/image/product-card-11.jpg";
import ProductCard from "./ProductCard";
import { productData } from "../../data/ProductCard";
function index() {
  return (
    <div>
      <div className="grid justify-items-center">
        <p className="text-white-600 pb-2">Featured Products</p>
        <p className="font-extrabold pb-2 ">BESTSELLER PRODUCTS</p>
        <p className="text-white-600">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-1 object-cover">
        {productData.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default index;
