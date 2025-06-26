import { Post } from "../types/post";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

async function getFetchPosts(): Promise<Post[]> {
  const res = await fetch(BASE_URL);
  const data: Post[] = await res.json();
  return data;
}
async function getFetchPost(id: string): Promise<Post> {
  const res = await fetch(`${BASE_URL}/${id}`);
  const data: Post = await res.json();
  return data;
}

export { getFetchPosts, getFetchPost };
