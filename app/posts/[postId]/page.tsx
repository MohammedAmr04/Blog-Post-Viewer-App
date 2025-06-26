import { getFetchPost } from "@/api/fetch";
import PostCard from "@/components/PostCard";

export default async function Post(props: { params: { postId: string } }) {
  const params = props.params;
  const post = await getFetchPost(params.postId);
  return (
    <div className="mt-4">
      <PostCard postContent={post} />
    </div>
  );
}
