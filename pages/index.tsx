import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { RecipeCardProps } from "../components/RecipeCard";
import { RecipeCardList } from "../components/RecipeCardList";
import styles from "../styles/Home.module.css";
import { fetchData } from "../utils/fetchData";
import { ALL_POSTS } from "../utils/graphqlqueries";

type HomeProps = {
  allPosts: { node: RecipeCardProps }[];
};

const Home: NextPage<HomeProps> = (props) => {
  console.log(props);

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
      <header>Homemaderecipes</header>
      <main className={styles.main}>
        <RecipeCardList posts={props.allPosts} />
      </main>

      <footer className={styles.footer}>Made with ♡ in Munich</footer>
    </>
  );
};

export async function getStaticProps() {
  const allPosts = await fetchData(ALL_POSTS);
  return {
    props: { allPosts: allPosts.posts.edges },
  };
}

export default Home;
