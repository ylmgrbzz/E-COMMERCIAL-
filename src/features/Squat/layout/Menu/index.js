import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbListTree } from "react-icons/tb";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Menu() {
  return (
    <>
      <div className="flex justify-center gap-20 pb-14 hidden sm:flex">
        <div>
          <p className="text-abony-950 font-montserrat text-2xl font-bold leading-8 tracking-tighter">
            Bandage
          </p>
        </div>
        <div className="flex gap-3">
          <CiSearch className="my-auto" />
          <MdOutlineShoppingCart className="my-auto" />
          <TbListTree className="my-auto" />
        </div>
      </div>
      <div className="text-center">
        <div className="hidden sm:block">
          <p className="text-gray-500 font-montserrat text-2xl font-normal  tracking-tighter pb-4 ">
            Home
          </p>
          <p className="text-gray-500 font-montserrat text-2xl font-normal  tracking-tighter pb-4 ">
            Product
          </p>
          <p className="text-gray-500 font-montserrat text-2xl font-normal  tracking-tighter pb-4 ">
            Pricing
          </p>
          <p className="text-gray-500 font-montserrat text-2xl font-normal  tracking-tighter pb-4 ">
            Contact
          </p>
        </div>
        <div>
          <p className="text-abony-950 font-montserrat text-2xl font-bold tracking-tighter pt-16">
            Start your 14 days free trial
          </p>
          <p className="text-gray-500 font-montserrat text-sm font-medium tracking-tighter pt-8">
            Met minim Mollie non desert Alamo est sit cliquey dolor{" "}
          </p>
          <p className="text-gray-500 font-montserrat text-sm font-medium tracking-tighter pt-1 pb-4">
            do met sent. RELIT official consequent.
          </p>
          <button className="mt-5 font-montserrat bg-blue-500 rounded-md text-white-50 font-medium text2xl px-10 py-3 ">
            Try it free now
          </button>
          <div className="flex justify-center pt-12 gap-6 pb-12">
            <FaTwitter className="text-3xl text-blue-500" />
            <IoLogoFacebook className="text-3xl text-abony-700" />
            <FaInstagram className="text-3xl" />
            <FaLinkedin className="text-3xl text-lochmora-500" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
