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
                  <img src="/assets/coment1.jpg" />
                </div>
              </div>
              <div className="cilentText">
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type
                </h4>
                <h1>Esther Howard</h1>
                <p>Founder of lovely</p>
              </div>
            </div>
            <div className="cilent" data-aos="fade-left">
              <div className="cilentImg">
                <div>
                  <img src="/assets/coment1.jpg" />
                </div>
              </div>
              <div className="cilentText">
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of
                </h4>
                <h1>Esther Howard</h1>
                <p>Founder of lovely</p>
              </div>
            </div>
          </div>
        </CustomerStyle>
      </Container>
    </FullContiner>
  );
};

export default Customers;
