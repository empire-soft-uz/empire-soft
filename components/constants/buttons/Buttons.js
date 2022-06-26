import React from "react";
import styled from "styled-components";
import { COLORS } from "../colors";
const Button = ({
  back = COLORS.BTN_BACKGROUND_SKY,
  color = COLORS.COLOR_WHITE,
  text = "Lets Talk",
}) => {
  const ButtonStyle = styled.button`
    position: relative;
    outline: none;
    border: none;
    margin: 0;
    background-color: ${back};
    padding: 12px 32px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    span {
      color: ${color};
      font-size: 15px;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
    }
  `;
  return (
    <>
      <ButtonStyle>
        <span>{text}</span>
      </ButtonStyle>
    </>
  );
};
export default Button;
