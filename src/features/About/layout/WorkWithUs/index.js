import React from "react";
import photo from "../../assets/unsplash_vjMgqUkS8q8.jpg";

function WorkWithUs() {
  return (
    <>
      <div className="flex bg-lochmora-500 py-20 sm:py-0">
        <div className="my-auto mx-20 sm:mx-48 w-full">
          <p className="font-montserrat text-xl text-center sm:text-start font-bold leading-1.5  text-white-50">
            WORK WITH US
          </p>
          <p className="font-montserrat text-2xl text-center sm:text-start font-bold leading-1.25  text-white-50 py-7">
            Now Let’s grow Yours
          </p>
          <p className="font-montserrat text-base font-normal leading-7 text-center sm:text-start text-white-50">
            The gradual accumulation of information about atomic and <br />
            small-scale behavior during the first quarter of the 20th
          </p>
          <div className="flex justify-center sm:justify-start">
            <button className="font-montserrat uppercase mt-5 border-wtext-white-50 border-2 text-white-50 font-medium text2xl px-10 py-[15px] rounded-md">
              READ MORE
            </button>
          </div>
        </div>
        <img src={photo} className="hidden md:block"></img>
      </div>
    </>
  );
}

export default WorkWithUs;
