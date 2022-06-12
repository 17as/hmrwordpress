import Image from "next/image";
import React from "react"; // we need this to make JSX compile
import styled from "styled-components";

export const StylesCard = styled.section`
  margin: 48px 16px;

  max-width: 768px;
  img {
    border-radius: 4px;
  }
  p {
    line-height: 150%;
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
);
