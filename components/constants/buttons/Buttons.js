import React from "react";
import styled from "styled-components";
import { COLORS } from "../colors";
const Button = ({ back, color, text, onClick }) => {
  const ButtonStyle = styled.button`
    position: relative;
    outline: none;
    border: none;
    margin: 0;
    cursor: pointer;
    background-color: ${back};
    padding: 14px 32px;
    transition: ease-in-out 0.15s;
    border-top-right-radius: 15px;
    border-top-left-radius: 1px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 1px;
    span {
      color: ${color};
      font-size: 15px;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      transition: ease-in-out 0.15s;
    }
    &:hover {
      transform: scale(1.1);
      span {
        color: ${COLORS.COLOR_DARK};
      }
    }
  `;
  return (
    <span onClick={onClick}>
      <ButtonStyle>
        <span>{text}</span>
      </ButtonStyle>
    </span>
  );
};
export default Button;
