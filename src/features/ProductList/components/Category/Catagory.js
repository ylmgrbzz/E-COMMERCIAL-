import React from "react";

function Catagory({ newCategoryData }) {
  return (
    <div className="flex flex-row  bg-alabaster-500">
      <div className="w-full relative">
        <img src={newCategoryData.image} className="w-full"></img>
        <div className="absolute flex flex-col inset-0 justify-center items-center text-white-50 text-center">
          <div className="font-bold pb-2">{newCategoryData.title}</div>
          <div>{newCategoryData.item}</div>
        </div>
      </div>
    </div>
  );
}

export default Catagory;

// absolute inset-0 flex flex-col justify-center items-center text-white text-center
