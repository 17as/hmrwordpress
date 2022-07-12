import React from 'react' // we need this to make JSX compile
import styled from 'styled-components'

export const StyledRecipe = styled.section`
  margin: 0;
  background-color: white;
  min-height: 651px;
  padding: 16px;

  max-width: 768px;
  line-height: 150%;

  p {
    margin: 0;
    padding-bottom: 16px;
  }
  .wprm-recipe-keyword,
  .wprm-recipe-course,
  .wprm-recipe-servings-with-unit,
  .wprm-recipe-cuisine {
    font-weight: bold;
  }
  h1 {
    padding: 24px 0;
    margin: 0;
    font-size: 32px;
    line-height: 120%;
  }
  @media (min-width: 481px) and (min-width: 767px) {
    margin: 0 auto;
  }
  .wprm-recipe-servings-container {
    background-color: ${(props) => props.theme.colors.lightbackground};
    padding: 16px 8px 16px 16px;
    border-radius: 0 0 6px 6px;
  }
  .wprm-recipe-tags-container {
    background-color: ${(props) => props.theme.colors.lightbackground};
    padding: 16px 8px 16px 16px;
    border-radius: 6px 6px 0 0;
  }
  .wprm-recipe-times-container {
    background-color: ${(props) => props.theme.colors.lightbackground};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 0 16px;
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
`

export type RecipeProps = {
  title: string
  date?: string
  content: string
}

export const Recipe = ({ title, date, content }: RecipeProps) => (
  <StyledRecipe>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </StyledRecipe>
)
