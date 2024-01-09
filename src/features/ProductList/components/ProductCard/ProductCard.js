import React from "react";

function ProductCard({ product }) {
  return (
    <div className="card-body grid justify-items-center  mt-20  hover:-translate-y-3 transform transition ">
      <img src={product.img} alt="" className="w-11/12" />
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
      <div className="flex flex-row justify-center pb-9">
        {product.colors.map((color) => (
          <div
            key={color}
            className="  flex w-3 h-3 mb-1 mx-1 rounded-full"
            style={{
              background: `${color}`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
