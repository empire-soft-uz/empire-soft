import React, { useState } from "react";
import About from "./about/About";
import Customers from "./customers/Customers";
import Footer from "./footer/Footer";
import Help from "./help/Help";
import Home from "./home/Home";
import Modal from "./modal/Modal";
import Partners from "./partners/Partners";
import Projects from "./projects/Projects";
import Services from "./services/Services";
import Technologies from "./technologies/Technologies";

const view = () => {
  const [isVisibility, setVisibility] = useState(false);

  return (
    <>
      <Home clickModal={() => setVisibility((prev) => !prev)} />
      <About />
      <Services />
      <Projects />
      <Help />
      <Partners />
      <Technologies />
      <Customers />
      <Footer />
      <Modal
        isVisibility={isVisibility}
        clickModal={() => setVisibility((prev) => !prev)}
      />
    </>
  );
};

export default view;
