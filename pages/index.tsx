import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { HomeComponent, HomeProps } from "../components/Home/HomeComponent";
import { fetchData } from "../utils/fetchData";
import { ALL_POSTS } from "../utils/graphqlqueries";

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
      <HomeComponent allPosts={props.allPosts} />
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
