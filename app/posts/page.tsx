import { getFetchPosts } from "@/api/fetch";
import AllPosts from "@/components/AllPosts";
// import PostCard from "@/components/PostCard";
import BlogSection from "@/components/RecentBlogPosts";
import DarkModeToggle from "@/components/ToggleDarkMode";
// import Link from "next/link";

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

export default async function Posts() {
  const posts = await getFetchPosts();
  const blogData = posts.slice(0, 5);
  return (
    <main className="container mx-auto">
      <section title="header" className="flex flex-col gap-12 py-8">
        <div className=" h-[60px] py-2.5 flex items-center justify-between">
          <div className="username">Mohammed Amr</div>
          <DarkModeToggle />
        </div>
        <h1 className="font-bold border-solid border-y my-0 py-0 border-black/30 uppercase text-[180px] text-[#1A1A1A] text-center">
          <span className="me-4">The</span>
          <span>blog</span>
        </h1>
      </section>
      <BlogSection posts={blogData} />
      <AllPosts posts={posts.slice(5)} />
    </main>
  );
}
