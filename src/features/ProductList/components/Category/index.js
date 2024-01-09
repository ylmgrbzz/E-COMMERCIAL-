import React from "react";
import { CatagoryData } from "../../data/CatagoryData";
import Catagory from "./Catagory";

function Category() {
  return (
    <>
      <div className="bg-alabaster-50 flex flex-col sm:flex-row px-48 items-center justify-between py-6">
        <div className="font-bold text-2xl text-abony-950 leading-8 pb-6 sm:pb-0 tracking-tighter">
          Shop
        </div>
        <div className="flex gap-8 sm:justify-center">
          <div className="font-montserrat text-base font-bold leading-6 tracking-wider my-auto text-abony-950">
            Home
          </div>
          <div className="font-montserrat text-base font-bold leading-6 tracking-wider my-auto text-white-300">
            Shop
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 gap-4 sm:grid-cols-1 px-36 pb-12 bg-alabaster-50">
        {CatagoryData.map((data) => (
          <Catagory newCategoryData={data} />
        ))}
      </div>
    </>
  );
}

export default Category;
