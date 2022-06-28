import React from "react";
import { Container, FullContiner } from "../../constants/content/Containers";
import { PartenrsStyle } from "../../styles/partners";

const data = [
  {
    src: "/assets/apple.png",
  },
  {
    src: "/assets/aws.png",
  },
  {
    src: "/assets/google.png",
  },
  {
    src: "/assets/salesforce.webp",
  },
  {
    src: "/assets/payme.png",
  },
  {
    src: "/assets/intel.png",
  },
];

const Partners = () => {
  return (
    <FullContiner>
      <Container>
        <PartenrsStyle>
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
