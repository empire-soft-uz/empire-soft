import React from "react";
import { Container, FullContiner } from "../../constants/content/Containers";
import { AboutStyle } from "../../styles/about";
import Button from "../../constants/buttons/Buttons";
import { COLORS } from "../../constants/colors";

const About = () => {
  return (
    <FullContiner>
      <Container>
        <AboutStyle>
          <div className="aboutContainer">
            <div className="aboutImages">
              <div className="imageleft" data-aos="fade-up-right">
                <div className="absolutBlock"></div>
                <div className="absolutImg-1">
                  <img src="/assets/group.png" />
                </div>
                <div className="imageleft-1">
                  <img src="/assets/home-1.jpg" />
                </div>
                <div className="imageleft-2" data-aos="fade-up-right">
                  <img src="/assets/home-4.jpg" />
                </div>
              </div>
              <div className="imageright" data-aos="fade-up-left">
                <div className="imageright-1">
                  <img src="/assets/home-5.jpg" />
                </div>
                <div className="absolutImg-2">
                  <img src="/assets/group.png" />
                </div>
              </div>
            </div>
            <div className="aboutText" data-aos="fade-down-left">
              <div>
                <h3>What About Weprosis</h3>
                <h1>Revolutionizing Your industry with Weprosis Software</h1>
                <p>
                  Weprosis,Worldwide based custom software development &
                  consulting company focusing on web,mobile,desktop & embedded
                  software development.It's committed to meet the highest of
                  ethical standards of work by implementing web & mobile
                  solutions without making any compromise on their quality &
                  functionality. & get back to you within one business day with
                  free consultation & to discuss the next steps.
                </p>
                <Button
                  text="Learn More"
                  color={COLORS.COLOR_WHITE}
                  back={COLORS.BTN_BACKGROUND_SKY}
                />
              </div>
            </div>
          </div>
        </AboutStyle>
      </Container>
    </FullContiner>
  );
};

export default About;
