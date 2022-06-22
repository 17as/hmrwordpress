import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { RecipeCardProps } from "../components/RecipeCard";
import { RecipeCardList } from "../components/RecipeCardList";
import styles from "../styles/Home.module.css";
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
      <main className={styles.main}>
        <RecipeCardList posts={props.allPosts} />
      </main>
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
