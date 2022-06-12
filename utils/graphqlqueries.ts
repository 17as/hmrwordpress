export const ALL_POSTS = `
query AllPosts {
  posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
    edges {
      node {
        title
        excerpt
        slug
        date
        featuredImage {
          node {
            sourceUrl,
            altText
          }
        }
      }
    }
  }
}
`;
