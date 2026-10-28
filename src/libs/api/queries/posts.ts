export const GET_POSTS = `
query GetPosts {
  posts {
    nodes {
      id
      slug
      title
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
}
`;

export const GET_POST_BY_SLUG = `
query GetPostBySlug($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    id
    title
    content
  }
}
`;
