import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { fetchData } from '../../utils/fetchData'
import {
  ALL_CATEGORIES_SLUGS,
  CATEGORY_BY_SLUG,
} from '../../utils/graphqlqueries'
import { GetStaticProps } from 'next'
import { Recipe } from '../../components/Recipe'
import { AppHeader } from '../../components/AppHeader'
import { AppFooter } from '../../components/AppFooter'
import Head from 'next/head'
import { RecipeCardList } from '../../components/RecipeCardList'

export default function Category(props: any) {
  const router = useRouter()
  if (!router.isFallback && !props.category.category.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <title>Homemaderecipes - {props.category?.category?.name}</title>
        <meta name="theme-color" content="#00308f" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader />

      <div>{props.category?.category?.name}</div>
      <main>
        <RecipeCardList posts={props.category?.category?.posts.edges} />
      </main>
      <AppFooter />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const category = await fetchData(CATEGORY_BY_SLUG, {
    id: context.params?.slug,
    idType: 'SLUG',
  })
  return {
    props: { category },
    revalidate: 86400, // one day in seconds
  }
}

export async function getStaticPaths() {
  const allCategories = (await fetchData(ALL_CATEGORIES_SLUGS)) as {
    categories: { edges: { node: { slug: string } }[] }
  }
  return {
    paths:
      allCategories.categories.edges.map(
        ({ node }) => `/categories/${node.slug}`
      ) || [],
    fallback: true,
  }
}
