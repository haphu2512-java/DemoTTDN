import { graphqlFetch } from "@/libs/api/client";
import { GET_POSTS, GET_POST_BY_SLUG } from "@/libs/api/queries/posts";

export async function getPosts() {
  return graphqlFetch(GET_POSTS);
}

export async function getPostBySlug(slug: string) {
  return graphqlFetch(GET_POST_BY_SLUG, {
    slug,
  });
}
