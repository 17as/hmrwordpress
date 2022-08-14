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
        categories {
          edges {
            node {
              name
            }
          }
        }
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

export const POST_BY_SLUG = `
  fragment PostFields on Post {
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
  query PostBySlug($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      ...PostFields
      content
    }
  }
`
