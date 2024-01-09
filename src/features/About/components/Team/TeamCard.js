import React from "react";

function TeamCard({ newTeamData }) {
  console.log("deneme");
  return (
    <div className="shadow-md   ">
      <img
        src={newTeamData.image}
        className="w-full"
        alt={newTeamData.title}
      ></img>
      <div className="px-6 pt-6 pb-9">
        <h1 className="font-montserrat font-bold leading-7 text-abony-950 tracking-tight text-center ">
          {newTeamData.title}
        </h1>

        <p className="font-montserrat text-gray-400 font-bold leading-5 tracking-normal text-center">
          {newTeamData.Profession}
        </p>
        <div className="">
          <div className="flex flex-row py-4 gap-4 justify-center text-blue-500 text-2xl">
            <div>{newTeamData.social1}</div>
            <div>{newTeamData.social2}</div>
            <div>{newTeamData.social3}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
