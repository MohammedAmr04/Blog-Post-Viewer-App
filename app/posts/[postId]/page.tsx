import { getFetchPost } from "@/api/fetch";
import PostCard from "@/components/PostCard";
interface PageProps {
  params: { postId: string };
}
export default async function Post({ params }: PageProps) {
  const awaitedParams = await params;
  const post = await getFetchPost(awaitedParams.postId);
  return (
    <div className="mt-4">
      <PostCard postContent={post} />
    </div>
  );
}
