import React from "react"; // we need this to make JSX compile
import styled from "styled-components";

export const StyledRecipe = styled.section`
  margin: 0 8px;
  background-color: white;
  min-height: 651px;

  max-width: 768px;
  p {
    line-height: 150%;
  }
  h1 {
    padding: 0 8px;
  }
  @media (min-width: 481px) and (min-width: 767px) {
    margin: 0 auto;
  }
`;

export type RecipeProps = {
  title: string;
  date?: string;
  content: string;
};

export const Recipe = ({ title, date, content }: RecipeProps) => (
  <StyledRecipe>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </StyledRecipe>
);
