import React from "react";
import { TfiTimer } from "react-icons/tfi";
import { GoGraph } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa6";

function Blog({ newDataProp }) {
  return (
    <div className="shadow-md">
      <img src={newDataProp.image} className="w-full"></img>
      <div className=" px-6 pt-6 pb-9">
        {Object.keys(newDataProp.link).map((key) => (
          <a href={newDataProp.link[key]}>{key}</a>
        ))}
        <h1 className="font-montserrat font-bold leading-7 text-abony-950 tracking-tight ">
          {newDataProp.title}
        </h1>
        <h1 className="font-montserrat font-bold leading-7 text-abony-950 tracking-tight ">
          {newDataProp.title2}
        </h1>
        <p className="font-montserrat text-sm text-gray-400 font-normal leading-5 tracking-normal">
          {" "}
          {newDataProp.description}
        </p>
        <div className="flex flex-row py-4 justify-between">
          <div className="flex flex-row">
            <TfiTimer className="text-blue-500 my-auto mr-2" />
            <div>{newDataProp.date}</div>
          </div>
          <div className="flex">
            <GoGraph className="text-emerald-700 my-auto mr-2" />
            <div>{newDataProp.comment}</div>
          </div>
        </div>
        <div className="flex">
          <div className="py-4 text-gray-500 font-semibold font-montserrat leading-6">
            {newDataProp.more}
          </div>
          <FaChevronRight className="text-blue-500 my-auto pl-3 text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default Blog;
