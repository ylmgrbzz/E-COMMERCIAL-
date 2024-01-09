import React from "react";
import Logo from "../../../ProductList/layout/Logo";

function Companies() {
  return (
    <div className="bg-alabaster-50">
      <div className="pb-20 pt-16">
        <h1 className="text-abony-950 font-montserrat font-bold text-4xl  tracking-wide text-center">
          Big Companies Are Here
        </h1>
        <p className="font-montserrat tracking-tighter text-center text-lg text-gray-500 pt-8">
          Problems trying to resolve the conflict between{" "}
        </p>
        <p className="font-montserrat tracking-tighter text-center text-lg text-gray-500 pt-1 ">
          the two major realms of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <Logo />
    </div>
  );
}

export default Companies;
