import { getFetchPosts } from "@/api/fetch";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export default async function Posts() {
  const posts = await getFetchPosts();
  return (
    <main className="container p-2.5 mx-auto gap-3 flex flex-col items-center">
      {posts.map((post) => (
        <Link className=" max-w-full" key={post.id} href={`posts/${post.id}`}>
          <PostCard key={post.id} postContent={post} />
        </Link>
      ))}
    </main>
  );
}
