import styled from "styled-components";
import { COLORS } from "../../constants/colors";
export const AboutStyle = styled.section`
  .aboutContainer {
    position: relative;
    width: 100%;
    height: auto;
    padding: 70px 0;
    display: flex;
    align-items: center;
    .absolutImg-1 {
      position: absolute;
      left: -20px;
      bottom: -20px;
      z-index: 2;
      img {
        width: 120px;
      }
    }
    .absolutImg-2 {
      position: absolute;
      right: -20px;
      top: 0px;
      z-index: 2;
      img {
        width: 120px;
      }
    }
    @media (max-width: 576px) {
      flex-direction: column;
      row-gap: 30px;
    }
    @media (min-width: 576px) {
      flex-direction: column;
      row-gap: 30px;
    }
    @media (min-width: 768px) {
      flex-direction: column;
    }
    @media (min-width: 992px) {
      flex-direction: row;
    }
    .aboutImages {
      position: relative;
      /* border: 1px solid red; */
      display: flex;
      .imageleft {
        position: relative;
        margin-top: 40px;
        /* border: 1px solid black; */
        display: flex;
        flex-direction: column;
        .absolutBlock {
          position: absolute;
          background-color: ${COLORS.BTN_BACKGROUND_SKY};
          width: 180px;
          height: 140px;
          border-top-left-radius: 40px;
          border-bottom-right-radius: 40px;
          top: -8px;
          left: -8px;
        }
        .imageleft-1 {
          position: relative;
          /* border: 1px solid green; */
          overflow: hidden;
          width: 230px;
          transform: scale(0.9);
          border-top-left-radius: 40px;
          border-bottom-right-radius: 40px;
          &:hover {
            transform: scale(1);
          }
          img {
            width: 260px;
          }
        }
        .imageleft-2 {
          position: relative;
          /* margin-top: 15px; */
          /* border: 1px solid green; */
          width: 230px;
          height: 220px;
          overflow: hidden;
          transform: scale(0.9);
          border-top-left-radius: 40px;
          border-bottom-right-radius: 40px;
          z-index: 5;
          &:hover {
            transform: scale(1);
          }
          img {
            transform: translate(-30px, -40px);
            width: 260px;
          }
        }
      }
      .imageright {
        position: relative;
        /* border: 1px solid gray; */
        .imageright-1 {
          position: relative;
          /* border: 1px solid pink; */
          width: 240px;
          overflow: hidden;
          transform: scale(0.9);
          border-top-left-radius: 50px;
          border-bottom-right-radius: 50px;
          z-index: 5;
          &:hover {
            transform: scale(1);
          }
          img {
            transform: translateX(-40px);
            width: 280px;
          }
        }
      }

      @media (max-width: 576px) {
        transform: scale(0.75);
      }
      @media (min-width: 576px) {
        transform: scale(1);
      }
    }
    .aboutText {
      position: relative;
      /* border: 1px solid red; */
      h3 {
        color: ${COLORS.COLOR_BLUE};
        font-size: 17px;
      }
      h1 {
        margin-top: 20px;
        color: ${COLORS.COLOR_DARK};
        font-size: 35px;
        line-height: 45px;
      }
      p {
        margin-top: 20px;
        color: #555;
        line-height: 23px;
        margin-bottom: 40px;
      }
      @media (max-width: 576px) {
        padding: 0;
        h1 {
          font-size: 25px;
        }
        h3 {
          font-size: 16px;
        }
      }
      @media (min-width: 576px) {
        h1 {
          font-size: 35px;
        }
        h3 {
          font-size: 17px;
        }
        padding: 0 70px;
      }
    }
  }
`;
