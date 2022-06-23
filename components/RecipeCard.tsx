import Image from "next/image";
import Link from "next/link";
import React from "react"; // we need this to make JSX compile
import styled from "styled-components";

export const StylesCard = styled.section`
  margin: 48px 8px;
  border-radius: 4px;
  overflow: hidden;
  background-color: white;

  max-width: 650px; // to include the border
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
  <StylesCard>
    <Link
      href={{
        pathname: `/recipes/${slug}`,
      }}
    >
      <a rel="follow">
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
      </a>
    </Link>
  </StylesCard>
);
