import React from "react";
import ProductCard from "./ProductCard";
import { productData } from "../../data/ProductCardData";
import { TfiViewListAlt } from "react-icons/tfi";
import { TfiViewGrid } from "react-icons/tfi";

function index() {
  return (
    <div className="lg:px-48 sm:px-10 py-6">
      <div className="flex  flex-col sm:flex-row items-center justify-between ">
        <p className="text-white-600 font-bold  pb-6 sm:pb-2 ">
          Showing all 12 results
        </p>
        <div className="flex gap-4 ">
          <p className="text-white-600  ">Views:</p>
          <TfiViewGrid className="my-auto text-2xl sm:text-xl" />
          <TfiViewListAlt className="my-auto text-xl" />
        </div>

        <div className="flex gap-5 pt-6 sm:pt-0">
          <p>Popularity</p>
          <button className="text-white-50 bg-blue-500  w-24 rounded-sm">
            {" "}
            Filter
          </button>
        </div>
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
