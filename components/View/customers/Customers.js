import React from "react";
import { Container, FullContiner } from "../../constants/content/Containers";
import { CustomerStyle } from "../../styles/customers";

const Customers = () => {
  return (
    <FullContiner>
      <Container>
        <CustomerStyle>
          <div className="customerTopText" data-aos="fade-down">
            <h3>Testimonials</h3>
            <h1>
              Our <span>Happy</span> Customers
            </h1>
          </div>
          <div className="clentCommit">
            <div className="cilent" data-aos="fade-right">
              <div className="cilentImg">
                <div>
                  <img src="/assets/rrr.png" />
                </div>
              </div>
              <div className="cilentText">
                <h4>
                  Deep for successful and productive cooperation thank you. The
                  technical services we used successful service was provided on
                  time. Company We wish you luck in your future endeavors
                </h4>
                <h1>Roee Bendor</h1>
                <p>Wedo solutions</p>
              </div>
            </div>
            <div className="cilent" data-aos="fade-left">
              <div className="cilentImg">
                <div>
                  <img src="/assets/jjj.png" />
                </div>
              </div>
              <div className="cilentText">
                <h4>
                  Our website as well Many thanks for successfully completing
                  the Crm program We are very satisfied with the quality of
                  work. It&apos;s fun to work with masters of their work! We
                  wish the company success and luck in its future endeavors!
                </h4>
                <h1>Jurgen Firsching</h1>
                <p>Chat XO</p>
              </div>
            </div>
          </div>
        </CustomerStyle>
      </Container>
    </FullContiner>
  );
};

export default Customers;
