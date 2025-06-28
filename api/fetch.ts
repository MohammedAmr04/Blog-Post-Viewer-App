import { Post } from "../types/post";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
type postApi = {
  id: number;
  userId: number;
  title: string;
  body: string;
};
const USER_NAME: string[] = ["Olivia Rhye", "Lana Steiner", "Phoenix Baker"];
const TAGS: string[] = ["Design", "API", "Frontend", "DevOps", "UX", "React"];
async function getFetchPosts(): Promise<Post[]> {
  const res = await fetch(BASE_URL);
  const rawData: postApi[] = await res.json();
  const posts: Post[] = rawData.slice(0, 100).map((post: Post) => ({
    ...post,
    author: USER_NAME[Math.floor(Math.random() * 3)],
    date: "1 Jan 2023",
    tags: [
      TAGS[Math.floor(Math.random() * 6)],
      TAGS[Math.floor(Math.random() * 6)],
    ],
  }));
  console.log("fetch posts==========", posts);
  return posts;
}

async function getFetchPost(id: string): Promise<Post> {
  const res = await fetch(`${BASE_URL}/${id}`);
  const data: Post = await res.json();
  return data;
}

export { getFetchPosts, getFetchPost };
