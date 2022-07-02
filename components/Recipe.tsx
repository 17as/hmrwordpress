import React from "react"; // we need this to make JSX compile
import styled from "styled-components";

export const StyledRecipe = styled.section`
  margin: 0;
  background-color: white;
  min-height: 651px;
  padding: 16px;

  max-width: 768px;
  p {
    line-height: 150%;
    margin: 0;
    padding-bottom: 16px;
  }
  .wprm-recipe-keyword,
  .wprm-recipe-course,
  .wprm-recipe-cuisine {
    font-weight: bold;
  }
  h1 {
    padding-bottom: 24px;
    margin: 0;
    font-size: 32px;
  }
  @media (min-width: 481px) and (min-width: 767px) {
    margin: 0 auto;
  }
  .wprm-recipe-times-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    .wprm-recipe-block-container {
      display: flex;
      flex-direction: column;
      min-width: 180px;
      margin-top: 16px;
      .wprm-recipe-time {
        font-weight: bold;
      }
    }
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
