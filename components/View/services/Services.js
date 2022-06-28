import React from "react";
import { Container, FullContiner } from "../../constants/content/Containers";
import { ServicesStyle } from "../../styles/services";
import { GoFileCode } from "react-icons/go";
import { TbDeviceDesktopAnalytics, TbDeviceMobile } from "react-icons/tb";
import { MdViewInAr } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlineSupport } from "react-icons/hi";
const data = [
  {
    title: "Web Development",
    icon: <GoFileCode />,
    iconColor: "#be2edd",
  },
  {
    title: "App Development",
    icon: <TbDeviceMobile />,
    iconColor: "#0abde3",
  },
  {
    title: "UX/UI Desgin",
    icon: <MdViewInAr />,
    iconColor: "#2ed573",
  },
  {
    title: "Backend Development",
    icon: <FaLaptopCode />,
    iconColor: "#ff6b81",
  },
  {
    title: "Analytic Solutions",
    icon: <TbDeviceDesktopAnalytics />,
    iconColor: "#f9ca24",
  },
  {
    title: "Support Service",
    icon: <HiOutlineSupport />,
    iconColor: "#22a6b3",
  },
];
const Services = () => {
  return (
    <FullContiner>
      <Container>
        <ServicesStyle>
          <div className="topText" data-aos="fade-down">
            <h3>Our Services</h3>
            <h1>See what we can do for you</h1>
          </div>
          <div className="servicesBoxs">
            {data.map((item, index) => {
              return (
                <>
                  <div className="itemBox" key={index} data-aos="zoom-in">
                    <div>
                      <span
                        style={{ backgroundColor: `${item.iconColor}` }}
                        className="colorItem"
                      >
                        {item.icon}
                      </span>
                      <h2>{item.title}</h2>
                      <p>
                        Since our establishment,we have been delivering
                        high-quality and sustainable software solutions for
                        corporate purposes of worldwide businesses.
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </ServicesStyle>
      </Container>
    </FullContiner>
  );
};

export default Services;
