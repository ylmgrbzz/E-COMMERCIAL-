import React from "react";
import Photo from "../../assets/shopcard.jpg";
import { IoIosArrowForward } from "react-icons/io";

function ShopCard() {
  return (
    <div>
      <div className="flex w-full h-20 items-center px-6 sm:px-96 place-content-around	">
        <p className="font-montserrat font-semibold text-xl leading-6 tracking-wider text-center text-gray-500">
          Description
        </p>
        <p className="font-montserrat font-semibold text-xl leading-6 tracking-wider text-center text-gray-500">
          Additional Information
        </p>
        <div className="flex gap-2">
          <p className="font-montserrat font-semibold text-xl leading-6 tracking-wider text-center text-gray-500">
            Reviews
          </p>
          <p className="font-montserrat font-semibold text-xl leading-6 tracking-wider text-center text-emerald-600">
            (0)
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row pt-10 px-10 sm:px-48 justify-between">
        <img src={Photo} className="" />
        <div className="sm:w-[332px]">
          <div className="">
            <h1 className="font-montserrat font-bold text-2xl leading-8 tracking-tighter pt-10 sm:pt-0 pb-8">
              the quick fox jumps over
            </h1>
            <p className="pb-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>

            <p className="pb-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="pb-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
        </div>
        <div className="w-[332px]flex flex-col justify-between">
          <div className="font-montserrat font-bold text-2xl leading-8 pt-10 sm:pt-0 tracking-tighter pb-4  text-abony-950">
            the quick fox jumps over
          </div>
          <div className="flex gap-3 font-semibold text-gray-700">
            <IoIosArrowForward className="my-auto" />
            <p>the quick fox jumps over the lazy dog</p>
          </div>
          <div className="flex gap-3 font-semibold text-gray-700">
            <IoIosArrowForward className="my-auto" />
            <p>the quick fox jumps over the lazy dog</p>
          </div>
          <div className="flex gap-3 font-semibold text-gray-700">
            <IoIosArrowForward className="my-auto" />
            <p>the quick fox jumps over the lazy dog</p>
          </div>
          <div className="flex gap-3 text-gray-700 font-semibold">
            <IoIosArrowForward className="my-auto" />
            <p>the quick fox jumps over the lazy dog</p>
          </div>
          <div className="flex gap-3  text-gray-700 font-semibold">
            <IoIosArrowForward className="my-auto" />
            <p>the quick fox jumps over the lazy dog</p>
          </div>
          <div className="font-montserrat font-bold text-2xl leading-8 tracking-tighter pb-4 text-abony-970">
            the quick fox jumps over
          </div>
          <div className="flex gap-3 font-semibold text-gray-700">
            <IoIosArrowForward className="my-auto" />
            <p>the quick fox jumps over the lazy dog</p>
          </div>
          <div className="flex gap-3 font-semibold text-gray-700">
            <IoIosArrowForward className="my-auto" />
            <p>the quick fox jumps over the lazy dog</p>
          </div>
          <div className="flex gap-3 font-semibold text-gray-700">
            <IoIosArrowForward className="my-auto" />
            <p>the quick fox jumps over the lazy dog</p>
          </div>
          <div className="flex gap-3 font-semibold text-gray-700">
            <IoIosArrowForward className="my-auto" />
            <p>the quick fox jumps over the lazy dog</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
