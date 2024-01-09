import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function contact() {
  return (
    <div className="px-0 sm:px-48 py-28">
      <div className="text-center">
        <p className="text-abony-950 font-montserrat text-14 font-bold leading-24 tracking-0.2 pb-3">
          VISIT OUR OFFICE
        </p>
        <p className="text-abony-950 font-montserrat text-3xl pb-4 font-bold leading-50 tracking-0.2">
          We help small businesses <br /> with big ideas
        </p>
      </div>

      <div className="px-8 flex sm:flex-row flex-col py-20">
        <div className="flex-1 flex flex-col items-center pb-10 justify-center my-10">
          <FaPhone className="text-blue-500 text-7xl mt-12 pb-3 mx-auto" />
          <p className="text-abony-950 pt-1 text-center font-montserrat text-14 font-bold leading-14 tracking-tighter">
            georgia.young@example.com
          </p>
          <p className="text-abony-950 pt-1 text-center font-montserrat text-14 font-bold leading-24 tracking-tighter">
            georgia.young@ple.com
          </p>
          <p className="text-abony-950 py-4 text-center font-montserrat text-14 font-bold leading-24 tracking-tighter">
            Get Support
          </p>
          <button className="mt-5 font-montserrat  border-2 border-blue-500 text-blue-500 font-medium text-2xl px-6 py-[12px]">
            Submit Request
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center pb-10 justify-center bg-abony-950 ">
          <FaLocationDot className="text-blue-500 text-7xl mt-12 pb-3 mx-auto" />
          <p className="text-white-50 pt-1 text-center font-montserrat text-14 font-bold leading-14 tracking-tighter">
            georgia.young@example.com
          </p>
          <p className="text-white-50 pt-1 text-center font-montserrat text-14 font-bold leading-24 tracking-tighter">
            georgia.young@ple.com
          </p>
          <p className="text-white-50 py-4 text-center font-montserrat text-14 font-bold leading-24 tracking-tighter">
            Get Support
          </p>
          <button className="mt-5 font-montserrat  border-2 border-blue-500 text-blue-500 font-medium text-2xl px-6 py-[12px]">
            Submit Request
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center pb-10 justify-center my-10">
          <IoIosMail className="text-blue-500 text-8xl mt-12 pb-3 mx-auto" />
          <p className="text-abony-950 pt-1 text-center font-montserrat text-14 font-bold leading-14 tracking-tighter">
            georgia.young@example.com
          </p>
          <p className="text-abony-950 pt-1 text-center font-montserrat text-14 font-bold leading-24 tracking-tighter">
            georgia.young@ple.com
          </p>
          <p className="text-abony-950 py-4 text-center font-montserrat text-14 font-bold leading-24 tracking-tighter">
            Get Support
          </p>
          <button className="mt-5 font-montserrat  border-2 border-blue-500 text-blue-500 font-medium text-2xl px-6 py-[12px]">
            Submit Request
          </button>
        </div>
      </div>
      <div className="text-center">
        <p className="text-abony-950 font-montserrat text-14  font-bold leading-24 tracking-0.2 pb-3 pt-16">
          WE Can't WAIT TO MEET YOU
        </p>
        <p className="text-abony-950 font-montserrat text-5xl py-4 font-extrabold leading-50 tracking-0.2">
          Let’s Talk{" "}
        </p>

        <button className="mt-5 font-montserrat rounded-lg bg-blue-500 text-white-50 font-medium leading-50 tracking-0.2 text-xl px-4 py-4">
          Submit Request
        </button>
      </div>
    </div>
  );
}

export default contact;
