import React from "react";
import Content from "./Content/Content";
import Roadmap from "./Roadmap/Roadmap";
import OurTeam from "./OurTeam/OurTeam";
import FAQ from "./FAQ/FAQ";
import Contact from "./Contact/Contact";
import "./Home.css";

const Home = () => {
  return (
    // Home page full desgn
    <div className="w-full min-h-screen">
      <Content />
      <Roadmap />
      <OurTeam />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
