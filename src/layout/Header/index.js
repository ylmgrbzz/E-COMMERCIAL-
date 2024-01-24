import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Twitter,
  Youtube,
} from "../../assets/icon";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Hdata } from "../../Datas/Hdata";

const HeaderInfo = () => {
  return (
    <div className="lg:flex justify-between w-full px-9 py-[15px] bg-abony-950 text-white-50 hidden ">
      <div className="flex gap-7 ">
        <div className="flex gap-2 items-center">
          <Phone /> (225) 555-0118
        </div>
        <div className="flex gap-2 items-center">
          <Email />
          michelle.rivera@example.com
        </div>
      </div>
      <div>Follow Us and get a chance to win 80% off</div>
      <div className="flex gap-4">
        <div>Follow Us :</div>
        <div className="flex items-center gap-2">
          <Instagram />
          <Youtube />
          <Facebook />
          <Twitter />
        </div>
      </div>
    </div>
  );
};

const Navigation = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const categories = useSelector((state) => state.global.categories);
  const [showCategories, setShowCategories] = useState(false);
  const groupedCategories = categories.reduce((acc, category) => {
    acc[category.gender] = acc[category.gender] || [];
    acc[category.gender].push(category);
    return acc;
  }, {});
  const handleSignout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const isTokenAvailable = localStorage.getItem("token");
  const [showNavigation, setShowNavigation] = useState(false);
  return (
    <nav className="w-full py-[21px] px-9 flex lg:flex-row  flex-col justify-between">
      <div className="flex justify-between ">
        <div className="w-[15%] flex items-center font-extrabold  text-2xl text-abony-950 ">
          Bandage
        </div>
        <div className="flex gap-3">
          <CiSearch className="lg:hidden my-auto text-3xl" />
          <CiShoppingCart className="lg:hidden my-auto text-3xl" />
          <IoMenuOutline
            onClick={() => setShowNavigation(!showNavigation)}
            className="lg:hidden cursor-pointer my-auto text-3xl"
          />
        </div>
      </div>
      {showNavigation ? (
        <div
          className={`flex lg:hidden pt-4 lg:pt-0 lg:justify-between justify-center ${
            showNavigation
              ? "absolute w-full z-20 bg-white-50 left-0 top-16"
              : "relative lg:w-[85%] sm:w-[100%]"
          }`}
        >
          <div>
            <ul className="flex lg:flex-row flex-col gap-3">
              <li className="px-4 hover:bg-white-200 sm:text-xl text-3xl  text-gray-500 hover:cursor-pointer py-3 ">
                Home
              </li>
              <li className="px-4 hover:bg-white-200 sm:text-xl text-3xl text-gray-500 hover:cursor-pointer py-3">
                Shop
              </li>
              <li className="px-4 hover:bg-white-200 sm:text-xl text-3xl text-gray-500 hover:cursor-pointer py-3">
                About
              </li>
              <li className="px-4 hover:bg-white-200 sm:text-xl text-3xl text-gray-500 hover:cursor-pointer py-3">
                Blog
              </li>
              <li className="px-4 hover:bg-white-200 sm:text-xl text-3xl text-gray-500 hover:cursor-pointer py-3">
                Contact
              </li>
              <li className="px-4 hover:bg-white-200 sm:text-xl text-3xl text-gray-500 hover:cursor-pointer py-3">
                Pages
              </li>
            </ul>
          </div>
          <div className="lg:flex gap-3 hidden">
            <IoPersonSharp className="my-auto text-2xl" />
            <Link to="/login">
              Login/Register
              <p className="px-4 hover:bg-white-200 sm:text-xl text-3xl text-blue-500 font-semibold hover:cursor-pointer py-3"></p>
            </Link>
            <CiSearch className="my-auto text-3xl" />
            <CiShoppingCart className="my-auto text-3xl" />
            <CiHeart className="my-auto text-3xl" />
          </div>
        </div>
      ) : (
        <div className="lg:w-[85%] sm:w-[100%] hidden lg:flex pt-4 lg:pt-0 lg:justify-between justify-center">
          <div>
            <ul className="flex lg:flex-row flex-col gap-3">
              <NavLink
                to="/"
                className="overflow-hidden  aspect-square relative"
              >
                <li className="px-4 hover:bg-white-200 sm:text-xl text-3xl  text-gray-500 hover:cursor-pointer py-3 ">
                  Home
                </li>
              </NavLink>

              <div className="flex  pr-2">
                <div
                  className="relative group"
                  onMouseEnter={() => setShowCategories(true)}
                  onMouseLeave={() => setShowCategories(false)}
                >
                  <NavLink
                    to={"/product"}
                    className="px-2 md:my-0 my-2 flex   hover:bg-white-200 sm:text-xl text-3xl  text-gray-500 hover:cursor-pointer py-3 "
                  >
                    Shop
                    <img className="ml-1" src={Hdata.headerArea.vectorLogo} />
                  </NavLink>

                  {showCategories && (
                    <div className="absolute z-10 mt-1 bg-gray-200 border border-sky-500 rounded-md shadow-xl w-96 flex">
                      <div className="w-1/2 border-r border-gray-300">
                        <div className="py-2 px-4 ">
                          <p className="font-bold text-sky-500 ">KADIN</p>
                          {groupedCategories["k"] &&
                            groupedCategories["k"].map((category) => (
                              <NavLink
                                to={`/shopping/kadin/${category.title}`}
                                key={category.id}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {category.title}
                              </NavLink>
                            ))}
                        </div>
                      </div>
                      <div className="w-1/2">
                        <div className="py-2 px-4">
                          <p className="font-bold text-sky-500 ">ERKEK</p>
                          {groupedCategories["e"] &&
                            groupedCategories["e"].map((category) => (
                              <NavLink
                                to={`/shopping/erkek/${category.title}`}
                                key={category.id}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {category.title}
                              </NavLink>
                            ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* <NavLink
                to="/product"
                className="overflow-hidden  aspect-square relative"
              >
                <li className="px-4 hover:bg-white-200 sm:text-xl text-3xl text-gray-500 hover:cursor-pointer py-3">
                  Product
                </li>
              </NavLink> */}
              <NavLink
                to="/about"
                className="overflow-hidden  aspect-square relative"
              >
                <li className="px-4 hover:bg-white-200 sm:text-xl text-3xl text-gray-500 hover:cursor-pointer py-3">
                  About
                </li>
              </NavLink>
              <NavLink
                to="/team"
                className="overflow-hidden  aspect-square relative"
              >
                <li className="px-4 hover:bg-white-200 sm:text-xl text-3xl text-gray-500 hover:cursor-pointer py-3">
                  Team
                </li>
              </NavLink>
              <NavLink
                to="/contact"
                className="overflow-hidden  aspect-square relative"
              >
                <li className="px-4 hover:bg-white-200 sm:text-xl text-3xl text-gray-500 hover:cursor-pointer py-3">
                  Contact
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="lg:flex gap-3 hidden">
            {isTokenAvailable ? (
              <Link to="#" onClick={handleSignout}>
                Signout
                <p className="px-4 hover:bg-white-200 sm:text-xl text-3xl text-blue-500 font-semibold hover:cursor-pointer py-3"></p>
              </Link>
            ) : (
              <>
                <IoPersonSharp className="my-auto text-2xl" />
                <Link to="/signup">
                  Register
                  <p className="px-4 hover:bg-white-200 sm:text-xl text-3xl text-blue-500 font-semibold hover:cursor-pointer py-3"></p>
                </Link>
                <Link to="/login">
                  Login
                  <p className="px-4 hover:bg-white-200 sm:text-xl text-3xl text-blue-500 font-semibold hover:cursor-pointer py-3"></p>
                </Link>
              </>
            )}
            <CiSearch className="my-auto text-3xl" />
            <CiShoppingCart className="my-auto text-3xl" />
            <CiHeart className="my-auto text-3xl" />
          </div>
        </div>
      )}
    </nav>
  );
};

const Header = () => {
  return (
    <header className="w-full">
      <HeaderInfo />
      <Navigation />
    </header>
  );
};

export default Header;
