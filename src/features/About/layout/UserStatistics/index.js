import React from "react";

function UserStatistics() {
  return (
    <>
      <div className=" sm:w-auto w-80 sm:text-start text-center mx-auto sm:mx-0">
        <p className="text-cinnabar-500 sm:pl-56 pb-6 pt-12 font-montserrat">
          Problems trying
        </p>
      </div>

      <div className="flex sm:flex-row flex-col justify-between px-0 sm:px-56 ">
        <div className=" sm:w-auto w-80 sm:text-start text-center mx-auto sm:mx-0">
          <p className="text-abony-950 font-montserrat font-bold text-2xl pb-2 leading-8 tracking-tighter">
            Met minim Mollie non desert <br /> Alamo est sit cliquey dolor do{" "}
            <br /> met sent.
          </p>
        </div>
        <div className=" sm:w-auto w-80 sm:text-start text-center mx-auto sm:mx-0 pt-8 sm:pt-0">
          <p className="text-gray-500 font-montserrat font-normal text-base leading-5 tracking-tighter">
            Problems trying to resolve the conflict between the two major realms{" "}
            <br />
            Classical physics: Newtonian mechanics of
          </p>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-between px-0 sm:px-64 py-24">
        <div>
          <p className="font-montserrat font-bold text-5xl leading-16 tracking-tighter text-center">
            15 K
          </p>
          <p className="text-gray-600 pt-2 font-montserrat font-bold text-xl leading-6 tracking-tighter text-center">
            Happy Customers
          </p>
        </div>
        <div>
          <p className="font-montserrat font-bold text-5xl pt-12 sm:pt-0 leading-16 tracking-tighter text-center">
            150K
          </p>
          <p className="text-gray-600 pt-2 font-montserrat font-bold text-xl leading-6 tracking-tighter text-center">
            Monthly Visitors
          </p>
        </div>
        <div>
          <p className="font-montserrat font-bold text-5xl pt-12 sm:pt-0 leading-16 tracking-tighter text-center">
            15
          </p>
          <p className="text-gray-600 pt-2 font-montserrat font-bold text-xl leading-6 tracking-tighter text-center">
            Countries Worldwide
          </p>
        </div>
        <div>
          <p className="font-montserrat font-bold text-5xl pt-12 sm:pt-0 leading-16 tracking-tighter text-center">
            100+
          </p>
          <p className="text-gray-600 pt-2 font-montserrat font-bold text-xl leading-6 tracking-tighter text-center">
            Top Partners
          </p>
        </div>
      </div>
    </>
  );
}

export default UserStatistics;
