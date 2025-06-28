import { Post } from "../types/post";
import small from "../assets/small.jpg";
import small2 from "../assets/small2.jpg";
import normal from "../assets/normal.jpg";
import normal2 from "../assets/normal2.jpg";
import large from "../assets/large.jpg";
import full from "../assets/full.jpg";
import { StaticImageData } from "next/image";
const IMAGES = [full, normal, normal2, small, small2, large];

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

const getRandomImage = (): StaticImageData => {
  return IMAGES[Math.floor(Math.random() * IMAGES.length)];
};

/**
 * Fetches posts from JSONPlaceholder API and enriches them with random authors, tags, and images.
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
      image: getRandomImage(),
    }));
    console.log(posts[5]);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

/**
 * Fetches a single post from JSONPlaceholder API by ID and enriches it with random author, date, tags, and image.
 * @param id - The ID of the post to fetch.
 * @returns A promise that resolves to an enriched Post object.
 * @throws Error if the API request fails.
 */
async function getFetchPost(id: string): Promise<Post> {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch post ${id}: ${res.status}`);
    }
    const data: postApi = await res.json();
    const enrichedPost: Post = {
      ...data,
      author: USER_NAME[Math.floor(Math.random() * USER_NAME.length)],
      date: new Date(
        Date.now() - Math.floor(Math.random() * 10000000000)
      ).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      tags: getRandomTags(Math.floor(Math.random() * 3) + 1),
      image: getRandomImage(),
    };
    console.log(enrichedPost);
    return enrichedPost;
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
    throw error;
  }
}

export { getFetchPosts, getFetchPost };
