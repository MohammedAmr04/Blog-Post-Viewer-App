"use client";
import { IPost } from "@/types/post";
import React, { useState } from "react";
import PostCard from "./PostCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type SectionProps = {
  posts: IPost[];
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
      <div className="flex flex-col items-center justify-between gap-4 mt-8 md:flex-row">
        <button
          className="px-3 py-1 flex gap-2 cursor-pointer items-center text-[#667085] dark:text-white font-medium  disabled:opacity-50"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          <FaArrowLeft />
          Previous
        </button>
        <div className="flex gap-1">
          {getPageNumbers().map((pageNum, idx) =>
            pageNum === "..." ? (
              <button
                key={`ellipsis-${idx}`}
                className="px-3 py-1 text-gray-700 bg-gray-200 rounded opacity-50 cursor-default dark:text-white dark:bg-transparent"
                disabled
              >
                ...
              </button>
            ) : (
              <button
                key={pageNum}
                className={`px-3  font-bold py-1 transition-all duration-300 rounded ${
                  pageNum === page
                    ? " bg-gray-200 text-purple-500"
                    : " text-gray-700 dark:text-white hover:bg-gray-300"
                }`}
                onClick={() => setPage(Number(pageNum))}
              >
                {pageNum}
              </button>
            )
          )}
        </div>
        <button
          className="px-3 py-1 cursor-pointer flex gap-2 items-center text-[#667085] dark:text-white font-medium  disabled:opacity-50"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default AllPosts;
