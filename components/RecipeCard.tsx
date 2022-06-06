import React from 'react'; // we need this to make JSX compile

export type RecipeCardProps = {
    title:string,
    coverImage:string,
    date:string,
    excerpt:string,
    author:{},
    slug:string,
}

export const RecipeCard = ({ title,
    coverImage,
    date,
    excerpt,
    author,
    slug, }: RecipeCardProps) => <aside>
  <h2>{ title }</h2>
  <p>
    { excerpt }
  </p>
</aside>


