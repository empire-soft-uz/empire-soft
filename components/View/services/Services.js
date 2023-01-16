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
    text: "Development of websites of any complexity with the author's design and taking into account the corporate identity of the company",
  },
  {
    title: "App Development",
    icon: <TbDeviceMobile />,
    iconColor: "#0abde3",
    text: "Android and IOS applications of various complexity and capabilities, taking into account the wishes of the customer",
  },
  {
    title: "System Development (CRM, ERP, LMS, PMS, BOOKING):",
    icon: <MdViewInAr />,
    iconColor: "#2ed573",
    text: "Automation of any processes and businesses for any current operating systems",
  },
  // {
  //   title: "Backend Development",
  //   icon: <FaLaptopCode />,
  //   iconColor: "#ff6b81",
  // },
  // {
  //   title: "Analytic Solutions",
  //   icon: <TbDeviceDesktopAnalytics />,
  //   iconColor: "#f9ca24",
  // },
  // {
  //   title: "Support Service",
  //   icon: <HiOutlineSupport />,
  //   iconColor: "#22a6b3",
  // },
];
const Services = () => {
  return (
    <FullContiner>
      <Container>
        <ServicesStyle id="Services">
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
                      <p>{item.text}</p>
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
