import React from "react";
import { TeamData } from "../../data/TeamData";
import TeamCard from "./TeamCard";

function Team() {
  return (
    <>
      <div className="px-32 sm:px-0">
        <h1 className="text-abony-950 font-montserrat font-bold text-4xl leading-1.25 tracking-wide text-center">
          Meet Our Team
        </h1>
        <p className="font-montserrat  leading-7 tracking-tighter text-center text-lg text-gray-500 pt-8">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="grid justify-items-center mt-20 mb-16"></div>
      <div className="grid lg:grid-cols-3 gap-3 sm:grid-cols-1 px-12 sm:px-48 mb-20">
        {TeamData.map((data) => (
          <TeamCard newTeamData={data} key={data.id} />
        ))}
      </div>
    </>
  );
}

export default Team;
