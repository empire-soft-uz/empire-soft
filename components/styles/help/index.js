import styled from "styled-components";
import { COLORS } from "../../constants/colors";
export const HelptStyle = styled.section`
  position: relative;
  padding: 70px 0;
  .topHelpText {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    row-gap: 20px;
    h1 {
      font-size: 38px;
      color: ${COLORS.COLOR_WHITE};
      span {
        color: ${COLORS.COLOR_SKY};
      }
    }
    h3 {
      font-size: 16px;
      color: ${COLORS.COLOR_WHITE};
    }
  }
  .helpItems {
    position: relative;
    margin-top: 40px;
    /* border: 1px solid red; */
    display: flex;
    flex-wrap: wrap;
    row-gap: 30px;
    align-items: center;
    justify-content: space-around;
    .helpItem {
      background-color: ${COLORS.BACKGOUND_WHITE};
      position: relative;
      width: 200px;
      padding: 30px 50px;
      /* border: 1px solid yellow; */
      text-align: center;
      border-top-right-radius: 45px;
      border-bottom-left-radius: 45px;
      z-index: 3;
      .absolutImg-1 {
        position: absolute;
        right: -20px;
        bottom: -20px;
        z-index: 1;
        img {
          width: 70px;
        }
      }
      div {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 20px;
        align-items: center;
        span {
          position: relative;
          /* width: 50px; */
          padding: 10px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          /* border: 1px solid red; */
          font-size: 25px;
          overflow: hidden;
          box-shadow: 0px 0px 8px #c1c1c1;
          transition: ease-in-out 0.15s;
          &::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            top: 50%;
            left: 50%;
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            background-color: ${COLORS.BACKGOUND_BLUE};
            z-index: -1;
            transition: ease-in-out 0.15s;
          }
        }

        h1 {
          font-size: 35px;
          color: ${COLORS.COLOR_DARK};
        }
        p {
          color: gray;
          font-weight: 500;
        }
      }
      &:hover {
        transform: scale(1.05);
        cursor: pointer;
        div {
          span {
            color: #fff !important;
            transition: ease-in-out 0.15s;
            &::before {
              transition: ease-in-out 0.15s;
              transform: translate(-50%, -50%) scale(1);
            }
          }
        }
      }
    }
  }
`;
