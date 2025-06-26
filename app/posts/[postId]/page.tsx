import { getFetchPost } from "@/api/fetch";
import PostCard from "@/components/PostCard";

export default async function Post({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const post = await getFetchPost(postId);
  return (
    <div className="mt-4">
      <PostCard postContent={post} />
    </div>
  );
}
