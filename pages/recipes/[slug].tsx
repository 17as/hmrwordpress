import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { fetchData } from "../../utils/fetchData";
import { ALL_SLUGS, POST_BY_SLUG } from "../../utils/graphqlqueries";
import { GetStaticProps } from "next";
import { Recipe } from "../../components/Recipe";
import { AppHeader } from "../../components/AppHeader";
import { AppFooter } from "../../components/AppFooter";

export default function RecipePost(props: any) {
  const router = useRouter();
  if (!router.isFallback && !props.post.post.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <AppHeader />
      <Recipe
        title={props.post?.post?.title}
        content={props.post?.post?.content}
      />
      <AppFooter />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const post = await fetchData(POST_BY_SLUG, {
    id: context.params?.slug,
    idType: "SLUG",
  });
  return {
    props: { post },
    revalidate: 86400, // one day in seconds
  };
};

export async function getStaticPaths() {
  const allPosts = (await fetchData(ALL_SLUGS)) as {
    posts: { edges: { node: { slug: string } }[] };
  };
  return {
    paths:
      allPosts.posts.edges.map(({ node }) => `/recipes/${node.slug}`) || [],
    fallback: true,
  };
}
