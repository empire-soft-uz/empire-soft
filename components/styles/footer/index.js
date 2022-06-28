import styled from "styled-components";
import { COLORS } from "../../constants/colors";
export const FooterStyle = styled.section`
  position: relative;
  padding: 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .footerBlock {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    /* border: 1px solid red; */
    color: ${COLORS.COLOR_WHITE};
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
      row-gap: 20px;
    }
    @media (min-width: 576px) {
      grid-template-columns: 1fr;
      row-gap: 20px;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }
    .footerLeft {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      /* border: 1px solid black; */
      @media (max-width: 576px) {
        grid-template-columns: 1fr;
        row-gap: 30px;
      }
      @media (min-width: 576px) {
        grid-template-columns: 1fr;
        row-gap: 30px;
      }
      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
      .text-1 {
        display: flex;
        flex-direction: column;
        .headerText {
          margin-bottom: 25px;
          h1 {
            font-size: 22px;
          }
        }
        p {
          line-height: 25px;
        }
      }
      .text-2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* border: 1px solid yellow; */
        .headerText {
          margin-bottom: 25px;
          h1 {
            font-size: 22px;
          }
        }
        ul {
          display: flex;
          flex-direction: column;
          li {
            list-style: none;
            padding: 8px 0;
          }
        }
      }
    }
    .footerRight {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr;
      @media (max-width: 576px) {
        grid-template-columns: 1fr;
        row-gap: 30px;
      }
      @media (min-width: 576px) {
        grid-template-columns: 1fr;
        row-gap: 30px;
      }
      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
      .text-1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* border: 1px solid yellow; */
        .headerText {
          margin-bottom: 25px;
          h1 {
            font-size: 22px;
          }
        }
        ul {
          display: flex;
          flex-direction: column;
          li {
            list-style: none;
            padding: 8px 0;
          }
        }
      }
      .text-2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: left;
        /* border: 1px solid yellow; */
        .headerText {
          margin-bottom: 25px;
          h1 {
            font-size: 22px;
            text-align: left;
          }
        }
        ul {
          display: flex;
          flex-direction: column;
          li {
            list-style: none;
            padding: 8px 0;
            display: flex;
            column-gap: 10px;
          }
        }
      }
    }
  }
  .absoulotTop {
    position: absolute;
    /* margin: auto; */
    display: flex;
    background-color: ${COLORS.BTN_BACKGROUND_SKY};
    color: ${COLORS.COLOR_WHITE};
    width: 65%;
    justify-content: space-evenly;
    padding: 45px 0;
    bottom: -50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
  }
  .absolutFooter {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    color: ${COLORS.COLOR_WHITE};
    bottom: 0;
    border-top: 1px solid #888;
    padding: 15px 0;
    h3 {
      font-size: 14px;
    }
  }
  .absolutImg {
    position: absolute;
    bottom: -30px;
    left: -30px;
    img {
      width: 100px;
    }
  }
  .absolutImg-2 {
    position: absolute;
    bottom: -30px;
    right: -30px;
    img {
      width: 100px;
    }
  }
`;
