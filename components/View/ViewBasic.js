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

const ViewBasic = () => {
  const [isVisibility, setVisibility] = useState(false);
  const handlerClick = () => {
    setVisibility((prev) => !prev);
  };

  return (
    <>
      <Home clickModal={() => handlerClick()} />
      <About />
      <Services />
      <Projects />
      <Help />
      <Partners />
      <Technologies />
      <Customers />
      <Footer />
      <Modal isVisibility={isVisibility} clickModal={() => handlerClick()} />
    </>
  );
};

export default ViewBasic;
