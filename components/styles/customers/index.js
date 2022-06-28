import styled from "styled-components";
import { COLORS } from "../../constants/colors";
export const CustomerStyle = styled.section`
  position: relative;
  padding: 100px 0 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .customerTopText {
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
  .clentCommit {
    position: relative;
    display: flex;
    margin-top: 50px;
    display: flex;
    @media (max-width: 576px) {
      flex-direction: column;
      row-gap: 25px;
    }
    @media (min-width: 576px) {
      flex-direction: column;
      row-gap: 25px;
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 992px) {
      flex-direction: row;
    }
    /* border: 1px solid dodgerblue; */
    .cilent {
      /* border: 1px solid deeppink; */
      position: relative;
      display: flex;
      @media (max-width: 576px) {
        flex-direction: column;
        row-gap: 25px;
        justify-content: center;
        align-items: center;
      }
      @media (min-width: 576px) {
        flex-direction: row;
        row-gap: 25px;
      }
      .cilentImg {
        position: relative;
        div {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 150px;
          overflow: hidden;
          border-top-left-radius: 30px;
          border-bottom-right-radius: 30px;
          img {
            width: 170px;
          }
        }
      }
      .cilentText {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        h4 {
          font-size: 16px;
          color: #666;
          line-height: 20px;
        }
        h1 {
          margin-top: 20px;
          color: ${COLORS.COLOR_SKY};
        }
        p {
          margin-top: 5px;
          color: ${COLORS.COLOR_DARK};
        }
      }
    }
  }
`;
