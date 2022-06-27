import React from "react";
import About from "./about/About";
import Help from "./help/Help";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Services from "./services/Services";

const view = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Projects />
      <Help />
    </>
  );
};

export default view;
