import { Post } from "@/types/post";
import React from "react";
import PostCard from "./PostCard";

type BlogSectionProps = {
  posts: Post[];
};

const BlogSection = ({ posts }: BlogSectionProps) => {
  if (posts.length < 4) return <p>Not enough posts!</p>;

  const large = posts[0];
  const smalls = posts.slice(1, 3);
  const full = posts[3];

  return (
    <section className="px-6 py-12">
      <h2 className="mb-8 text-2xl font-semibold">Recent blog posts</h2>

      {/* Main grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 ">
        {/* Large card */}
        <div className="lg:col-span-1">
          <PostCard key={large.id} postContent={large} variant="large" />
        </div>

        {/* Two small cards */}
        <div className="flex flex-col gap-6">
          {smalls.map((post) => (
            <PostCard key={post.id} postContent={post} variant="small" />
          ))}
        </div>
      </div>

      {/* Full width card */}
      <div className="mt-10">
        <PostCard key={full.id} postContent={full} variant="full" />
      </div>
    </section>
  );
};

export default BlogSection;
