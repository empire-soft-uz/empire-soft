import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import {
  BackgroundBlue,
  Container,
  FullContiner,
} from "../../constants/content/Containers";
import { FooterStyle } from "../../styles/footer";
import Button from "../../constants/buttons/Buttons";
import { COLORS } from "../../constants/colors";

const Footer = () => {
  return (
    <>
      <FullContiner>
        <BackgroundBlue>
          <Container>
            <FooterStyle>
              {/* <div className="absoulotTop">
                <div>
                  <h1>Have an idea?</h1>
                  <p>Lets make something together. Drop a line to....</p>
                </div>
                <Button
                  text="Let's Talk"
                  color={`${COLORS.COLOR_SKY}`}
                  back={COLORS.BACKGOUND_WHITE}
                />
              </div> */}
              <div className="footerBlock">
                <div className="footerLeft">
                  <div className="text-1" data-aos="fade-right">
                    <div className="headerText">
                      <h1>Empire</h1>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      standard dummy
                    </p>
                  </div>
                  <div className="text-2" data-aos="fade-left">
                    <div className="headerText">
                      <h1>Social Link</h1>
                    </div>
                    <ul>
                      <li>
                        <a href="#">Facebook</a>
                      </li>
                      <li>
                        <a href="#">Twitter</a>
                      </li>
                      <li>
                        <a href="#">Linkdin</a>
                      </li>
                      <li>
                        <a href="#">Instagram</a>
                      </li>
                      <li>
                        <a href="#">Telegram</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footerRight">
                  <div className="text-1" data-aos="fade-right">
                    <div className="headerText">
                      <h1>What We Do</h1>
                    </div>
                    <ul>
                      <li>
                        <a href="#">Web Devlopment</a>
                      </li>
                      <li>
                        <a href="#">App Devlopment</a>
                      </li>
                      <li>
                        <a href="#">UI/UX Desgin</a>
                      </li>
                      <li>
                        <a href="#">Backend Devlopment</a>
                      </li>
                      <li>
                        <a href="#">Devops</a>
                      </li>
                    </ul>
                  </div>
                  <div className="text-2" data-aos="fade-left">
                    <div className="headerText">
                      <h1>Contact Us</h1>
                    </div>
                    <ul>
                      <li>
                        <span>
                          <BsTelephoneFill />
                        </span>
                        <a href="#">+998 99 999 99 99</a>
                      </li>
                      <li>
                        <span>
                          <MdEmail />
                        </span>
                        <a href="#">info@empire.com</a>
                      </li>
                      <li>
                        <span>
                          <IoLocationSharp />
                        </span>
                        <a href="#">Uzbekistan, Samarkand</a>
                      </li>
                      <li>
                        <a href="#"></a>
                      </li>
                      <li>
                        <a href="#">Pirvacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolutFooter" data-aos="fade-up">
                <h3>Copyright 2022 Empire </h3>
              </div>
              <div className="absolutImg-2">
                <img src="/assets/group.png" />
              </div>
              <div className="absolutImg">
                <img src="/assets/group.png" />
              </div>
            </FooterStyle>
          </Container>
        </BackgroundBlue>
      </FullContiner>
    </>
  );
};

export default Footer;
