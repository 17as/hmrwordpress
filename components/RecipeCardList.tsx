import React from 'react'; // we need this to make JSX compile
import { RecipeCardProps } from './RecipeCard';

export type RecipeCardListProps = {
    posts: {node: RecipeCardProps}[]
}

export const RecipeCardList = ( props: RecipeCardListProps) => <section>
  {props.posts.map(({ node }) => (
      <>
          <h2>{node.title}</h2>
          <p>{node.excerpt}</p>
          </>
        ))}
</section>




