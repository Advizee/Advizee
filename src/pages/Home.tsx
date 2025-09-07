import React from "react";
import HomeHero from "../components/HomeHero";
import Guidance from "../components/Guidance";
import Comparison from "../components/Comparison";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

const Home: React.FC = () => {
  return (
    <div>
      <HomeHero />
      <Guidance />
      <Comparison />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
