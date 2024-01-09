import React from "react";
import Photo1 from "../../assets/image/desktop-header-24.jpg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function HeroSection() {
  return (
    <div className="relative w-full ">
      {/* <div>
        <img src={Photo1} className=" sm:h-[70vh] w-full object-cover :h-20" />
        <div className="w-full max-w-[1030px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3">
          <div className="text-abony-950 mb-7  font-bold text-lg font-montserrat">
            CONTACT US
          </div>
          <div className="text-abony-950 font-bold text-5xl mb-2  font-montserrat leading-tight -tracking-tight ">
            Get in touch
          </div>
          <div className="text-abony-950 font-bold text-5xl mb-2  font-montserrat leading-tight -tracking-tight ">
            today!
          </div>

          <div className="text-gray-400  font-montserrat text-xl font-normal tracking-tight leading-7">
            We know how large objects will act,
          </div>

          <div className="text-gray-400 mb-7 font-montserrat text-xl font-normal tracking-tight leading-7">
            but things on a small scale
          </div>
          <p className="text-abony-950 font-bold text-xl mb-2 font-montserrat leading-tight -tracking-tight ">
            Phone: +451 215 215
          </p>
          <p className="text-abony-950 font-bold text-xl mb-2 font-montserrat leading-tight -tracking-tight ">
            Fax:+451 215 215
          </p>
          <div className="flex gap-5 pt-5 text-lg">
            <FaTwitter />
            <FaFacebookSquare />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default HeroSection;
