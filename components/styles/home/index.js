import styled from "styled-components";
import { COLORS } from "../../constants/colors";
export const HomeStyle = styled.section`
  .fullContainer {
    .absolutImg-3 {
      position: absolute;
      left: 166px;
      bottom: -60px;
      z-index: 2;
      img {
        width: 150px;
      }
    }
    .absolutImg-4 {
      position: absolute;
      left: 50px;
      bottom: -100px;
      z-index: 2;
      img {
        width: 150px;
      }
    }
    width: 100%;
    height: 100vh;
    background-color: ${COLORS.BACKGOUND_BLUE};
    .topMenuContainer {
      position: relative;
      /* border: 1px solid red; */
      display: flex;
      padding: 20px 0;
      align-items: center;
      justify-content: space-between;
      .topMenuLogo {
        position: relative;
      }
      .topMenuCategory {
        position: relative;
        display: flex;
        align-items: center;
        /* border: 1px solid yellow; */
        ul {
          display: flex;
          padding-right: 10px;
          @media (min-width: 320px) {
            display: none;
          }
          @media (min-width: 992px) {
            display: flex;
          }
          li {
            list-style: none;
            a {
              position: relative;
              text-align: center;
              /* border: 1px solid red; */
              color: ${COLORS.COLOR_WHITE};
              font-weight: 500;
              padding: 12px 25px;
              cursor: pointer;
              &::before {
                position: absolute;
                content: "";
                bottom: 0;
                left: 0;
                width: 100%;
                height: 0px;
                opacity: 0;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                transition: ease-in-out 0.15s;
                background-color: ${COLORS.BTN_BACKGROUND_SKY};
              }
              &:hover {
                &::before {
                  height: 4px;
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
    /* header text and banner */
    .header {
      position: relative;
      display: flex;
      align-items: center;
      /* border: 1px solid red; */
      .textHeader {
        position: relative;
        /* border: 1px solid beige; */
        h1 {
          font-size: 50px;
          color: ${COLORS.COLOR_WHITE};
          font-weight: 700;
          line-height: 60px;
        }
        p {
          margin-top: 20px;
          line-height: 25px;
          color: ${COLORS.COLOR_GREAY};
          margin-bottom: 30px;
        }
        @media (max-width: 576px) {
          margin-top: 60px;
          h1 {
            font-size: 28px;
          }
          p {
            margin-bottom: 90px;
          }
        }
      }
      @media (min-width: 576px) {
        margin-top: 60px;
        h1 {
          font-size: 40px;
        }
        p {
          margin-bottom: 90px;
        }
      }
      @media (min-width: 768px) {
      }
      @media (min-width: 992px) {
        margin-top: 0;
        h1 {
          font-size: 50px;
        }
        p {
          margin-bottom: 30px;
        }
      }
    }
    .bannerHeader {
      position: relative;
      .absolutImg-1 {
        position: absolute;
        right: -8px;
        top: 0;
        img {
          width: 150px;
        }
      }
      .absolutImg-2 {
        position: absolute;
        left: -8px;
        bottom: 0;
        z-index: 2;
        img {
          width: 150px;
        }
      }
      /* border: 1px solid yellow; */
      @media (min-width: 320px) {
        display: none;
      }
      @media (min-width: 992px) {
        display: flex;
      }
      .bannerPhoto {
        position: relative;
        overflow: hidden;
        width: 480px;
        height: auto;
        border-top-left-radius: 100px;
        border-bottom-right-radius: 100px;
        transform: scale(0.9);
        z-index: 5;
        img {
          width: 750px;
        }
      }
    }
  }
`;
