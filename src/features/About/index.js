import React from "react";
import HeroSection from "./layout/HeroSection/index";
import UserStatistics from "./layout/UserStatistics/index";
import Team from "./components/Team/";
import Video from "./components/Video";
import Companies from "./layout/Companies";
import WorkWithUs from "./layout/WorkWithUs";

function AboutPage() {
  return (
    <>
      <HeroSection />
      <UserStatistics />
      <Video />
      <Team />
      <WorkWithUs />

      <Companies />
    </>
  );
}

export default AboutPage;
