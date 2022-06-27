import styled from "styled-components";
import { COLORS } from "../../constants/colors";
export const ServicesStyle = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  padding: 50px 0;
  .topText {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 65px;
    row-gap: 15px;
    h3 {
      font-size: 17px;
      color: ${COLORS.COLOR_BLUE};
    }
    h1 {
      font-size: 38px;
      color: ${COLORS.COLOR_DARK};
    }
  }
  .servicesBoxs {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    .itemBox {
      position: relative;
      /* border: 1px solid deeppink; */
      padding: 60px 25px;
      width: 377px;
      height: 377px;
      text-align: center;
      border-top-right-radius: 50px;
      border-bottom-left-radius: 50px;
      &:hover {
        box-shadow: 0px 0px 20px rgba(1, 1, 1, 0.1);
      }
      div {
        position: relative;
        .colorItem {
          background-color: #be2edd;
          color: ${COLORS.COLOR_WHITE};
          font-size: 60px;
          padding: 13px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-top-right-radius: 15px;
          border-bottom-left-radius: 15px;
        }
        h2 {
          margin-top: 20px;
          color: ${COLORS.COLOR_DARK};
          font-size: 25px;
        }
        p {
          color: #555;
          margin-top: 20px;
          line-height: 25px;
        }
      }
    }
  }
`;
