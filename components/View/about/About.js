import React from "react";
import { Container, FullContiner } from "../../constants/content/Containers";
import { AboutStyle } from "../../styles/about";

const About = () => {
  return (
    <FullContiner>
      <Container>
        <AboutStyle>
          <div className="aboutContainer">
            <div className="aboutImages">
              <div className="imageleft">
                <div className="imageleft-1">
                  <img src="/assets/home-3.jpg" />
                </div>
                <div className="imageleft-2">
                  <img src="/assets/home-2.jpg" />
                </div>
              </div>
              <div className="imageright">
                <div className="imageright-1">
                  <img src="/assets/home-5.jpg" />
                </div>
              </div>
            </div>
            <div className="aboutText"></div>
          </div>
        </AboutStyle>
      </Container>
    </FullContiner>
  );
};

export default About;
