import React from "react";
// import Photo from "../../assets/image/asian-woman-man-with-winter-clothes 1.jpg";
import Photo1 from "../../assets/asian-woman-man-with-winter-clothes 1.jpg";

function Collection() {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-1 px-36  ">
        {/* <img src={Photo}></img> */}
        <img src={Photo1} />
        <div className=" my-auto mx-auto">
          <p className="font-montserrat font-bold text-lg text-gray-300 pb-7">
            Summer 2020
          </p>
          <h1 className="font-montserrat font-bold text-4xl leading-10 tracking-wide text-abony-950 pb-1">
            Part of the Neural{" "}
          </h1>
          <h1 className="font-montserrat font-bold text-4xl leading-10 tracking-wide text-abony-950 pb-7">
            Universe{" "}
          </h1>
          <p className="font-montserrat text-gray-600 font-medium leading-8 tracking-wider">
            We know how large objects will act{" "}
          </p>
          <p className="font-montserrat text-gray-600 font-medium leading-8 tracking-wider pb-3 ">
            but things on a small scale.
          </p>
          <div>
            <button className="font-montserrat mt-5 bg-emerald-500 text-white-50 font-medium text2xl px-10 py-[15px] rounded-md">
              BUY NOW
            </button>
            <button className=" ml-4 font-montserrat uppercase mt-5 border-emerald-500 border-2 text-emerald-500 font-medium text2xl px-10 py-[15px] rounded-md">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
