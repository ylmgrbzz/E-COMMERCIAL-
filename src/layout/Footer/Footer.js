import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  function onFormSubmit(event) {
    console.log("afadfa");
  }
  return (
    <>
      <div className="bg-alabaster-50 my-12">
        <div className="1.kisim flex flex-col sm:flex-row  h-32 px-20 sm:px-48 justify-between">
          <h1 className="font-extrabold text-xl text-abony-950 my-auto">
            Bandage
          </h1>
          <div className="flex my-auto space-x-5 justify-start pr-12">
            <FaFacebook className="my-auto  text-blue-500 text-xl " />
            <IoLogoInstagram className="my-auto text-blue-500 text-xl" />
            <FaTwitter className="my-auto text-blue-500 text-xl" />
          </div>
        </div>
      </div>
      <div className="2.kisim flex px-20 sm:px-48 sm:flex-row flex-col justify-between">
        <div className="CompanyInfo ">
          <p className="pb-5 font-montserrat font-bold font text-sm leading-6 tracking-wide">
            Company Info{" "}
          </p>
          <p className="pb-2 font-montserrat font-bold text-sm tracking-wide leading-6 text-gray-500">
            About Us
          </p>
          <p className="pb-2 font-montserrat font-bold text-sm tracking-wide leading-6 text-gray-500">
            Carrier
          </p>
          <p className="pb-2 font-montserrat font-bold text-sm tracking-wide leading-6 text-gray-500">
            We are hiring
          </p>
          <p className="pb-2 font-montserrat font-bold text-sm tracking-wide leading-6 text-gray-500">
            Blog
          </p>
        </div>
        <div className="Legal ">
          <p className="pb-5 font-montserrat font-bold font text-sm leading-6 tracking-wide">
            Legal
          </p>
          <p className="pb-2 font-montserrat font-bold text-sm tracking-wide leading-6 text-gray-500">
            About Us
          </p>
          <p className="pb-2 font-montserrat font-bold text-sm tracking-wide leading-6 text-gray-500">
            Carrier
          </p>
          <p className="pb-2 font-montserrat font-bold text-sm tracking-wide leading-6 text-gray-500">
            We are hiring
          </p>
          <p className="pb-2 font-montserrat font-bold text-sm tracking-wide leading-6 text-gray-500">
            Blog
          </p>
        </div>
        <div className="Features ">
          <p className="pb-5 font-montserrat font-bold font text-sm leading-6 tracking-wide">
            Features
          </p>
          <p className="pb-2 font-montserrat font-bold text-sm tracking-wide leading-6 text-gray-500">
            Business Marketing
          </p>
          <p className="pb-2 font-montserrat font-bold text-sm tracking-wide leading-6 text-gray-500">
            user Analytic
          </p>
          <p className="pb-2 font-montserrat font-bold text-sm tracking-wide leading-6 text-gray-500">
            Live Chat
          </p>
          <p className="pb-2 font-montserrat font-bold text-sm tracking-wide leading-6 text-gray-500">
            Unlimited Support
          </p>
        </div>
        <div className="Resources ">
          <p className="pb-5 font-montserrat font-bold font text-sm leading-6 tracking-wide">
            Resources
          </p>
          <p className="pb-2 font-montserrat font-bold text-sm tracking-wide leading-6 text-gray-500">
            IOS & Android
          </p>
          <p className="pb-2 font-montserrat font-bold text-sm tracking-wide leading-6 text-gray-500">
            Watch a Demo
          </p>
          <p className="pb-2 font-montserrat font-bold text-sm tracking-wide leading-6 text-gray-500">
            Customers
          </p>
          <p className="pb-2 font-montserrat font-bold text-sm tracking-wide leading-6 text-gray-500">
            API
          </p>
        </div>
        <div className="GetInTouch ">
          <p className="pb-5 font-montserrat font-bold font text-sm leading-6 tracking-wide">
            Get In Touch
          </p>
          <form onSubmit={onFormSubmit()}>
            <button
              type="submit"
              className="mt-5 font-montserrat rounded-md bg-blue-500 text-white-50 font-medium leading-50 tracking-0.2 text-sm px-3 py-2 "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className=" w-full flex bg-alabaster-50 px-32 pt-8 sm:px-48 h-16 ">
        <p className="my-auto font-montserrat font-bold text-sm tracking-wide leading-6 text-gray-500">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
