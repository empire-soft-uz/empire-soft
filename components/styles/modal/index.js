import styled from "styled-components";
import { COLORS } from "../../constants/colors";
export const ModalStyle = styled.section`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  .black {
    background-color: rgba(1, 1, 1, 0.5);
    width: 100%;
    height: 100vh;
    position: absolute;
  }
  .modal {
    background-color: ${COLORS.COLOR_WHITE};
    width: 350px;
    height: 250px;
    border-radius: 10px;
    z-index: 22;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    text-align: center;
  }
  .inputs {
    display: flex;
    flex-direction: column;
  }
  .input {
    width: 280px;
    height: 30px;
    padding: 10px;
    font-size: 16px;
    margin-top: 10px;
  }
  .btns {
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
`;
