import React from "react";
import About from "./about/About";
import Help from "./help/Help";
import Home from "./home/Home";
import Partners from "./partners/Partners";
import Projects from "./projects/Projects";
import Services from "./services/Services";
import Technologies from "./technologies/Technologies";

const view = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Projects />
      <Help />
      <Partners />
      <Technologies />
    </>
  );
};

export default view;
