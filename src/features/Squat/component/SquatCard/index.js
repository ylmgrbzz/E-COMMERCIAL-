import React from "react";
import { SquatData } from "../../data";
import SquatCard from "./SquatCard";

function Squat() {
  return (
    <>
      <h1 className="text-abony-950 font-montserrat font-bold text-4xl leading-1.25 tracking-wide text-center pt-32">
        Meet Our Team
      </h1>
      <div className="grid justify-items-center mt-20 mb-16"></div>
      <div className="grid lg:grid-cols-3 gap-10 sm:grid-cols-1 px-12 sm:px-48 mb-20">
        {SquatData.map((data, index) => (
          <SquatCard newSquatData={data} key={index} />
        ))}
      </div>
    </>
  );
}

export default Squat;
