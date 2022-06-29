import React from "react";
import {
  BackgroundBlue,
  Container,
  FullContiner,
} from "../../constants/content/Containers";
import { RiTeamFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { BsCalendarCheck, BsFillCheckCircleFill } from "react-icons/bs";
import { BiHappyHeartEyes } from "react-icons/bi";
import { HelptStyle } from "../../styles/help";

const data = [
  {
    icon: <RiTeamFill />,
    number: "15+",
    title: "Our Team Members",
    color: "#be2edd",
  },
  {
    icon: <TbWorld />,
    number: "52+",
    title: "Our Team Members",
    color: "#0abde3",
  },
  {
    icon: <BsFillCheckCircleFill />,
    number: "127+",
    title: "Our Team Members",
    color: "#2ed573",
  },
  {
    icon: <BiHappyHeartEyes />,
    number: "273+",
    title: "Our Team Members",
    color: "#ff6b81",
  },
  {
    icon: <BsCalendarCheck />,
    number: "7+",
    title: "Our Team Members",
    color: "#f9ca24",
  },
];

const Help = () => {
  return (
    <FullContiner>
      <BackgroundBlue>
        <Container>
          <HelptStyle>
            <div className="topHelpText" data-aos="fade-up">
              <h3>Were Here to Help</h3>
              <h1>
                <span>Empire</span> At a Glance
              </h1>
            </div>
            <div className="helpItems">
              {data.map((item, index) => {
                return (
                  <>
                    <div
                      className="helpItem"
                      key={index}
                      data-aos="zoom-out-up"
                    >
                      <div>
                        <span style={{ color: `${item.color}` }}>
                          {item.icon}
                        </span>
                        <h1>{item.number}</h1>
                        <p>{item.title}</p>
                      </div>
                      <div className="absolutImg-1">
                        <img src="/assets/group.png" />
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </HelptStyle>
        </Container>
      </BackgroundBlue>
    </FullContiner>
  );
};

export default Help;
