import Image from "next/image";
import React from "react"; // we need this to make JSX compile

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
  author,
  slug,
}: RecipeCardProps) => (
  <section>
    {featuredImage?.node?.sourceUrl && (
      <Image
        width={1160}
        height={868}
        alt={featuredImage?.node?.altText}
        src={featuredImage.node.sourceUrl}
      />
    )}
    <h2>{title}</h2>
    <div dangerouslySetInnerHTML={{ __html: excerpt }} />
  </section>
);
