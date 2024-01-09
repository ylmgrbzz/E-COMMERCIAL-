import React from "react";
import Brand1 from "../../assets/image/fa-brands-1.png";
import Brand2 from "../../assets/image/fa-brands-2.png";
import Brand3 from "../../assets/image/fa-brands-3.png";
import Brand4 from "../../assets/image/fa-brands-4.png";
import Brand5 from "../../assets/image/fa-brands-5.png";
import Brand6 from "../../assets/image/fa-brands-6.png";

function index() {
  return (
    <div className="bg-alabaster-50">
      <div className="flex lg:flex-row flex-col items-center justify-between lg:w-[1050px] mx-auto">
        <img src={Brand1} className="pt-12 sm:w-[155px] lg:w-fit" c />
        <img src={Brand2} className="pt-12 sm:w-[155px] lg:w-fit" />
        <img src={Brand3} className="pt-12 sm:w-[155px] lg:w-fit" />
        <img src={Brand4} className="pt-12 sm:w-[155px] lg:w-fit" />
        <img src={Brand5} className="pt-12 sm:w-[155px] lg:w-fit" />
        <img src={Brand6} className="pt-12 sm:w-[155px] lg:w-fit" />
      </div>
    </div>
  );
}

export default index;
