import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { AppFooter } from "../components/AppFooter";
import { AppHeader } from "../components/AppHeader";
import { RecipeCardProps } from "../components/RecipeCard";
import { RecipeCardList } from "../components/RecipeCardList";
import { fetchData } from "../utils/fetchData";
import { ALL_POSTS } from "../utils/graphqlqueries";

type HomeProps = {
  allPosts: { node: RecipeCardProps }[];
};

const Home: NextPage<HomeProps> = (props) => {
  return (
    <>
      <Head>
        <title>
          Homemaderecipes - tasty and healthy recipes to prepare in your own
          kitchen
        </title>
        <meta
          name="description"
          content="Homemaderecipes - tasty and healthy recipes to prepare in your own kitchen "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <AppHeader />
        <main>
          <RecipeCardList posts={props.allPosts} />
        </main>
        <AppFooter />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await fetchData(ALL_POSTS);
  return {
    props: { allPosts: allPosts.posts.edges },
  };
};

export default Home;
