import React from "react"; // we need this to make JSX compile
import styled from "styled-components";

export const StylesHeader = styled.header`
  height: 56px;
  background-image: linear-gradient(to right, #002244,  #002244, #0039a6, #00308f);
  color: white;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  p {
      margin 0;
      line-height: 100%;
      padding-left: 16px;
      padding-top: 12px;
      font-size: 24px
  }
`;

export const AppHeader = () => (
  <StylesHeader>
    <p>Homemaderecipes.eu</p>
  </StylesHeader>
);
