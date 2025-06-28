"use client";
import { Post } from "@/types/post";
import React, { useState } from "react";
import PostCard from "./PostCard";

type SectionProps = {
  posts: Post[];
  pageSize?: number;
};

const AllPosts = ({ posts, pageSize = 6 }: SectionProps) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(posts.length / pageSize);
  const paginatedPosts = posts.slice((page - 1) * pageSize, page * pageSize);

  if (posts.length === 0) return <p>Not enough posts!</p>;

  // Helper to generate pagination buttons
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (page > 3) pages.push("...");
      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (page < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <section className="px-6 py-12">
      <h2 className="mb-8 text-2xl font-semibold">All blog posts</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedPosts.map((post) => (
          <PostCard key={post.id} postContent={post} />
        ))}
      </div>
      <div className="flex items-center justify-between gap-2 mt-8">
        <button
          className="px-3 py-1 text-white bg-gray-700 rounded disabled:opacity-50"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <div className="flex gap-1">
          {getPageNumbers().map((pageNum, idx) =>
            pageNum === "..." ? (
              <button
                key={`ellipsis-${idx}`}
                className="px-3 py-1 text-gray-700 bg-gray-200 rounded opacity-50 cursor-default"
                disabled
              >
                ...
              </button>
            ) : (
              <button
                key={pageNum}
                className={`px-3 bg-gray-200 font-bold py-1 rounded ${
                  pageNum === page
                    ? " text-purple-500"
                    : " text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setPage(Number(pageNum))}
              >
                {pageNum}
              </button>
            )
          )}
        </div>
        <button
          className="px-3 py-1 text-white bg-gray-700 rounded disabled:opacity-50"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default AllPosts;
