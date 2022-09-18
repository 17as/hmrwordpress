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
    overflow: hidden;
    margin-bottom: 24px;
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
  modified: string
  excerpt: string
  author: {}
  slug: string
  categories: { edges: [{ node: { name: string; slug: string } }] }
}

export const RecipeCard = ({
  title,
  featuredImage,
  modified,
  excerpt,
  slug,
  categories,
}: RecipeCardProps) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' } as const
  const lastModified = modified ? new Date(modified) : undefined
  return (
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
          <p>
            Last modified:{' '}
            <time dateTime={modified}>
              {lastModified?.toLocaleDateString('en-UK', options)}
            </time>
          </p>
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
            <a rel="follow">
              <StyledCategory>{category.node.name}</StyledCategory>
            </a>
          </Link>
        ))}
      </StyledCategoryContainer>
    </StyledCard>
  )
}
