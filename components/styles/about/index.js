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
    .aboutImages {
      position: relative;
      border: 1px solid red;
      display: flex;
      .imageleft {
        position: relative;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        .imageleft-1 {
          position: relative;
          border: 1px solid green;
          img {
            width: 260px;
          }
        }
        .imageleft-2 {
          position: relative;
          border: 1px solid green;
          img {
            width: 260px;
          }
        }
      }
      .imageright {
        position: relative;
        border: 1px solid gray;
        .imageright-1 {
          position: relative;
          border: 1px solid pink;
          img {
            width: 280px;
          }
        }
      }
    }
  }
`;
