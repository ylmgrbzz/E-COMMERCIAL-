import React from "react";
import { BlogData } from "../../data/Blog";
import Blog from "./Blog";

function index() {
  return (
    <>
      <div className="grid justify-items-center mt-20 mb-16">
        <p className="font-montserrat text-sm text-blue-500 font-bold leading-6.5 tracking-wider">
          Practice Advice
        </p>
        <h1 className="font-montserrat text-2xl text-abony-950 font-bold leading-10 py-3 ">
          Featured Posts
        </h1>
        <p className="font-montserrat text-white-700  ">
          Problems trying to resolve the conflict between{" "}
        </p>
        <p className=" font-montserrat text-white-700 ">
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-3 sm:grid-cols-1 px-48 mb-20">
        {BlogData.map((data) => (
          <Blog newDataProp={data} />
        ))}
      </div>
    </>
  );
}

export default index;
