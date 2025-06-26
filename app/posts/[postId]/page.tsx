export default function Post({ params }: { params: { postId: string } }) {
  return <div className="mt-4">post {params.postId}</div>;
}
