import styled from "styled-components";
import { COLORS } from "../../constants/colors";
export const PartenrsStyle = styled.section`
  position: relative;
  padding: 80px 0;
  .partners {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    .partnersTopText {
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
    .partnersCarusel {
      position: relative;
      /* border: 1px solid red; */
      width: 100%;
      margin-top: 40px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      row-gap: 15px;
      .itemCarusel {
        position: relative;
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        height: 90px;
        padding: 10px 25px;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }
        img {
          width: 120px;
        }
      }
    }
  }
`;
