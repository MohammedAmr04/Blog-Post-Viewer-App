import { getFetchPosts } from "@/api/fetch";
import AllPosts from "@/components/AllPosts";
import NavBar from "@/components/NavBar";
import BlogSection from "@/components/RecentBlogPosts";

export default async function Posts() {
  const posts = await getFetchPosts();
  const blogData = posts.slice(0, 5);
  return (
    <main className="container mx-auto">
      <NavBar />
      <BlogSection posts={blogData} />
      <AllPosts posts={posts.slice(5)} />
    </main>
  );
}
export const metadata = {
  title: "All Blog Posts | Mohammed Amr Blog",
  description:
    "Browse all blog posts by Mohammed Amr. Discover articles, tutorials, and more.",
  openGraph: {
    title: "All Blog Posts | Mohammed Amr Blog",
    description:
      "Browse all blog posts by Mohammed Amr. Discover articles, tutorials, and more.",
    type: "website",
  },
};
