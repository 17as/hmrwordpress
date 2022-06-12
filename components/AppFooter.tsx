import React from "react"; // we need this to make JSX compile
import styled from "styled-components";

export const StylesFooter = styled.footer`
  background: linear-gradient(to right, #002244, #0039a6, #00308f, #00308f);
  padding: 16px;
  color: white;
  text-align: center;
  p {
    margin: 0;
    line-height: 120%;
    font-size: 14px;
  }
`;

export const AppFooter = () => (
  <StylesFooter>
    <p>Made with ♡ in Munich</p>
    <p>
      All content, including images belong to the owner of homemaderecipes.eu.
      Please do not copy or publish anything wihout permission.
    </p>
    <p>Copyright © 2022</p>
  </StylesFooter>
);
