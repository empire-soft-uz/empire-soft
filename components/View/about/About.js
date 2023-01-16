import React from "react";
import { Container, FullContiner } from "../../constants/content/Containers";
import { AboutStyle } from "../../styles/about";
import Button from "../../constants/buttons/Buttons";
import { COLORS } from "../../constants/colors";

const About = () => {
  return (
    <FullContiner>
      <Container>
        <AboutStyle id="About">
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
                <h3>What About Empire-soft</h3>
                <h1>Revolutionizing Your industry with Empire-soft</h1>
                <p>
                  Our company is engaged in services for the creation of
                  websites, mobile applications, as well as CRM, ERP, LMS, PMS
                  systems in Uzbekistan. All our projects, regardless of
                  complexity and subject matter, successfully promote the
                  services of their owners. A creative team of experienced
                  professionals always works for the result, helping clients to
                  promote their business online. By contacting us, you are
                  guaranteed to receive a high-quality project within a strictly
                  stipulated time frame. The price of such work is more than
                  acceptable, but this is how you can develop your business
                  qualitatively in a short time. In addition, new technologies
                  allow you to attract only an interested audience. Our services
                  will certainly bring the site to the TOP, where it will be
                  strengthened forever.
                </p>
                {/* <Button
                  text="Learn More"
                  color={COLORS.COLOR_WHITE}
                  back={COLORS.BTN_BACKGROUND_SKY}
                /> */}
              </div>
            </div>
          </div>
        </AboutStyle>
      </Container>
    </FullContiner>
  );
};

export default About;
