import Image from "next/image";
import Link from "next/link";
import React from "react"; // we need this to make JSX compile
import styled from "styled-components";

export const StylesCard = styled.section`
  margin: 48px 8px;
  border: 1px solid black;
  border-radius: 12px;
  overflow: hidden;
  background-color: white;

  max-width: 652px; // to include the border
  p {
    line-height: 150%;
    padding: 0 8px;
  }
  h2 {
    padding: 0 8px;
  }
  @media (min-width: 481px) and (min-width: 767px) {
    margin: 48px auto;
  }
`;

export type RecipeCardProps = {
  title: string;
  featuredImage: { node: { sourceUrl: string; altText: string } };
  date: string;
  excerpt: string;
  author: {};
  slug: string;
};

export const RecipeCard = ({
  title,
  featuredImage,
  date,
  excerpt,
  slug,
}: RecipeCardProps) => (
  <Link
    href={{
      pathname: `/recipes/${slug}`,
    }}
  >
    <a rel="follow">
      <StylesCard>
        {featuredImage?.node?.sourceUrl && (
          <Image
            width={650}
            height={486}
            alt={featuredImage?.node?.altText}
            src={featuredImage.node.sourceUrl}
          />
        )}
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
      </StylesCard>
    </a>
  </Link>
);
