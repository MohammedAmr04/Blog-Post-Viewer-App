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

const getRandomTags = (count: number): string[] => {
  const shuffled = [...TAGS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

/**
 * Fetches posts from JSONPlaceholder API and enriches them with random authors and tags.
 * @returns A promise that resolves to an array of enriched Post objects.
 * @throws Error if the API request fails.
 */
async function getFetchPosts(): Promise<Post[]> {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status}`);
    }
    const rawData: postApi[] = await res.json();
    const posts: Post[] = rawData.slice(0, 100).map((post: postApi) => ({
      ...post,
      author: USER_NAME[Math.floor(Math.random() * USER_NAME.length)],
      date: new Date(
        Date.now() - Math.floor(Math.random() * 10000000000)
      ).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      tags: getRandomTags(Math.floor(Math.random() * 3) + 1),
    }));
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

export default getFetchPosts;
async function getFetchPost(id: string): Promise<Post> {
  const res = await fetch(`${BASE_URL}/${id}`);
  const data: Post = await res.json();
  return data;
}

export { getFetchPosts, getFetchPost };
