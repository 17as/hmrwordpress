import React from "react"; // we need this to make JSX compile
import { AppFooter } from "../AppFooter";
import { AppHeader } from "../AppHeader";
import { RecipeCardProps } from "../RecipeCard";
import { RecipeCardList } from "../RecipeCardList";

export type HomeProps = {
  allPosts: { node: RecipeCardProps }[];
};

export const HomeComponent = ({ allPosts }: HomeProps) => (
  <>
    <AppHeader />
    <main>
      <RecipeCardList posts={allPosts} />
    </main>
    <AppFooter />
  </>
);
