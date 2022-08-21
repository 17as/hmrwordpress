const PostFields = `fragment PostFields on Post {
  title
  slug
  date
  categories {
    edges {
      node {
        name
      }
    }
  }
  tags {
    edges {
      node {
        name
      }
    }
  }
}
`
const PostFieldsForCard = `fragment PostFields on Post {
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
  categories {
    edges {
      node {
        name
        slug
      }
    }
  }
}
`

export const ALL_POSTS = `
${PostFieldsForCard}
query AllPosts {
  posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
    edges {
      node {
        ...PostFields
      }
    }
  }
}
`
export const ALL_SLUGS = `
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `
export const ALL_CATEGORIES_SLUGS = `
{
  categories(first: 10000) {
    edges {
      node {
        slug
      }
    }
  }
}
`

export const CATEGORY_BY_SLUG = `
${PostFieldsForCard}
  query GetCategoryBySlug($id: ID!, $idType: CategoryIdType!) {
    category(id: $id, idType: $idType) {
      id
      name
      slug
      description
      posts {
        edges {
          node {
          ...PostFields
        }
      }
      }
    }
  }
  `
export const POST_BY_SLUG = `
  ${PostFields}
  query PostBySlug($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      ...PostFields
      content
    }
  }
`
