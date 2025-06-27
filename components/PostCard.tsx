"use client";
import { Post } from "@/types/post";
export default function PostCard({ postContent }: { postContent: Post }) {
  return (
    <div
      className="bg-gray-800 max-w-full w-[600px] text-white rounded-xl shadow-md p-6 border border-dark-1 hover:shadow-lg hover:bg-gray-900 hover:text-blue-100 transition-all duration-500 cursor-pointer"
      key={postContent.id}
      data-aos="fade-up"
    >
      <div className="font-bold  text-xl mb-2 group-hover:text-blue-400 transition-colors duration-500 [textWrap:balance">
        {postContent.title}
      </div>
      <div className="text-base text-blue-200">{postContent.body}</div>
    </div>
  );
}
