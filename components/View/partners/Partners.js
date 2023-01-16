import React from "react";
import { Container, FullContiner } from "../../constants/content/Containers";
import { PartenrsStyle } from "../../styles/partners";

const data = [
  {
    src: "/assets/click.png",
  },
  {
    src: "/assets/100k.png",
  },
  {
    src: "/assets/dveas.png",
  },
  {
    src: "/assets/wedo.png",
  },
  {
    src: "/assets/qwert.png",
  },
  {
    src: "/assets/icon-digital.png",
  },
];

const Partners = () => {
  return (
    <FullContiner>
      <Container>
        <PartenrsStyle id="Partners">
          <div className="partners">
            <div className="partnersTopText" data-aos="fade-down">
              <h3>Our Clients Partners</h3>
              <h1>
                Our <span>Trusted</span> Clients & Partners Worldwide
              </h1>
            </div>
            <div className="partnersCarusel">
              {data.map((item, index) => {
                return (
                  <>
                    <div className="itemCarusel" data-aos="flip-left">
                      <img src={item.src} />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </PartenrsStyle>
      </Container>
    </FullContiner>
  );
};

export default Partners;
