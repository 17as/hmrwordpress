import React from 'react' // we need this to make JSX compile
import styled from 'styled-components'
import { RecipeCard, RecipeCardProps } from './RecipeCard'

export const StylesList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 16px;
  margin: 0 auto;
  padding: 0 8px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1200px;
  }
`

export type RecipeCardListProps = {
  posts: { node: RecipeCardProps }[]
}

export const RecipeCardList = (props: RecipeCardListProps) => (
  <StylesList>
    {props.posts?.map(({ node }) => (
      <RecipeCard {...node} key={node.slug} />
    ))}
  </StylesList>
)
