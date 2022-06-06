import React from "react"; // we need this to make JSX compile
import { RecipeCard, RecipeCardProps } from "./RecipeCard";

export type RecipeCardListProps = {
  posts: { node: RecipeCardProps }[];
};

export const RecipeCardList = (props: RecipeCardListProps) => (
  <>
    {props.posts.map(({ node }) => (
      <RecipeCard {...node} key={node.slug} />
    ))}
  </>
);
