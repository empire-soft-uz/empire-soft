import React from "react";
import styled from "styled-components";
import { COLORS } from "../colors";
export const FullContiner = styled.section`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
`;
export const BackgroundSky = styled.section`
  background-color: ${COLORS.BACKGOUND_WHITE_BLUE};
`;
export const BackgroundBlue = styled.section`
  background-color: ${COLORS.BACKGOUND_BLUE};
`;
export const Container = styled.div`
  position: relative;
  border: 1px solid green;
  margin: auto;
  @media (max-width: 576px) {
    width: 100%;
    padding: 0 15px;
  }
  @media (min-width: 576px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
  @media (min-width: 1400px) {
    width: 1320px;
  }
`;
