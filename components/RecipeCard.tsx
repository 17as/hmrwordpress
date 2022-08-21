import Image from 'next/image'
import Link from 'next/link'
import React from 'react' // we need this to make JSX compile
import styled from 'styled-components'

export const StyledCard = styled.section`
  margin: 32px auto;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 4px 10px -2px rgba(0, 0, 0, 0.2);

  img {
    border: 1px solid transparent;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }

  max-width: 450px;
  p {
    padding: 0 8px;
    line-height: 150%;
    height: 72px;
    overflow: hidden;
  }
  h2 {
    padding: 0 8px;
    font-size: 1.1em;
    height: 24px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  @media (min-width: 767px) {
    margin: 48px auto;
  }
`

export const StyledCategoryContainer = styled.div`
  padding: 0 ${(props) => props.theme.spacing.xs};
  min-height: 40px;
  position: relative;
  bottom: 0;
`
export const StyledCategory = styled.span`
  padding: ${(props) => props.theme.spacing.xs};
  border-radius: ${(props) => props.theme.spacing.xs1};
  background-color: ${(props) => props.theme.colors.lightbackground};
  margin-right: ${(props) => props.theme.spacing.xs};
  border: 1px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;
`
export type RecipeCardProps = {
  title: string
  featuredImage: { node: { sourceUrl: string; altText: string } }
  date: string
  excerpt: string
  author: {}
  slug: string
  categories: { edges: [{ node: { name: string; slug: string } }] }
}

export const RecipeCard = ({
  title,
  featuredImage,
  date,
  excerpt,
  slug,
  categories,
}: RecipeCardProps) => (
  <StyledCard>
    <Link
      href={{
        pathname: `/recipes/${slug}`,
      }}
    >
      <a rel="follow">
        {featuredImage?.node?.sourceUrl && (
          <Image
            width={450}
            height={336}
            alt={featuredImage?.node?.altText}
            src={featuredImage.node.sourceUrl}
          />
        )}
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
      </a>
    </Link>
    <StyledCategoryContainer>
      {categories.edges.map((category) => (
        <Link
          key={category.node.name}
          href={{
            pathname: `/categories/${category.node.slug}`,
          }}
        >
          <StyledCategory>{category.node.name}</StyledCategory>
        </Link>
      ))}
    </StyledCategoryContainer>
  </StyledCard>
)
