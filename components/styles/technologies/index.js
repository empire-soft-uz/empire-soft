import styled from "styled-components";
import { COLORS } from "../../constants/colors";
export const TechnoloStyle = styled.section`
  position: relative;
  padding: 70px 0;
  .technologies {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    .topText {
      position: relative;
      display: flex;
      align-items: center;
      row-gap: 20px;
      flex-direction: column;
      h1 {
        font-size: 38px;
        color: ${COLORS.COLOR_DARK};
        span {
          color: ${COLORS.COLOR_SKY};
        }
      }
      h3 {
        font-size: 16px;
        color: ${COLORS.COLOR_BLUE};
      }
    }
    .technoTools {
      position: relative;
      margin-top: 35px;
      display: flex;
      flex-direction: column;
      width: 100%;
      .headerTools {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        ul {
          display: flex;
          border: 1px solid #eee;
          flex-wrap: wrap;
          justify-content: space-around;
          li {
            position: relative;
            list-style: none;
            font-size: 24px;
            font-weight: 500;
            color: #444;
            padding: 15px 35px;
            cursor: pointer;
          }
          .active {
            color: ${COLORS.COLOR_SKY};
            transition: ease-in-out 0.15s;
            &::before {
              position: absolute;
              content: "";
              width: 100%;
              height: 4px;
              bottom: 0;
              left: 0;
              background-color: ${COLORS.BTN_BACKGROUND_SKY};
            }
          }
        }
      }
      .Tools {
        position: relative;
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        align-items: center;
        justify-content: space-around;
        .tool {
          position: relative;
          width: 150px;
          height: 180px;
          padding: 25px 0 10px;
          text-align: center;
          cursor: pointer;
          h2 {
            position: absolute;
            bottom: 10px;
            left: 50%;
            font-size: 16px;
            transform: translateX(-50%);
            margin-top: 10px;
            color: #555;
          }
          img {
            filter: grayscale(100%);
          }
          &:hover {
            box-shadow: 0px 0px 10px #ddd;
            background-color: ${COLORS.BACKGOUND_WHITE};
            h2 {
              color: ${COLORS.COLOR_DARK};
            }
            img {
              filter: grayscale(0);
            }
          }
        }
      }
    }
  }
`;
