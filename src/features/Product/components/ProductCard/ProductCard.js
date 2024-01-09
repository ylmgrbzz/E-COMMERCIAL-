import React from "react";

function ProductCard({ product }) {
  return (
    <div className="card-body grid justify-items-center  mt-20 shadow-md hover:-translate-y-3 transform transition ">
      <img src={product.img} className="w-full px-10 sm:px-0"></img>
      <h2 className="font-montserrat text-base font-bold text-abony-950 pt-5 leading-6">
        {product.title}
      </h2>
      <h3 className="font-montserrat text-sm font-bold text-white-500 py-2 leading-6">
        {product.description}
      </h3>
      <h4 className="flex gap-2 pb-3 ">
        <span className=" font-montserrat text-base font-bold text-white-500">
          {product.actualPrice}
        </span>
        /
        <span className="text-emerald-800 font-montserrat text-base font-bold">
          {product.discountPrice}
        </span>
      </h4>
    </div>
  );
}

export default ProductCard;
