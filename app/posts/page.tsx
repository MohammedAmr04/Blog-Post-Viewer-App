import { getFetchPosts } from "@/api/fetch";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export default async function Posts() {
  const posts = await getFetchPosts();
  return (
    <div className="container">
      {posts.map((post) => (
        <Link key={post.id} href={`posts/${post.id}`}>
          <PostCard key={post.id} postContent={post} />
        </Link>
      ))}
    </div>
  );
}
