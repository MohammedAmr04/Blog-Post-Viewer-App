import { Post } from "./../types/post";
export default function PostCard({ postContent }: { postContent: Post }) {
  return (
    <div className=" bg-amber-600 my-2" key={postContent.id}>
      <div>{postContent.title}</div>
      {postContent.body}
    </div>
  );
}
