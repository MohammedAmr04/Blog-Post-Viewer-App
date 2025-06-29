import { getFetchPost } from "@/api/fetch";
import NavBar from "@/components/NavBar";
import { IPost } from "@/types/post";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { getFetchPost } = await import("@/api/fetch");
  const { postId } = await params;

  const post = await getFetchPost(postId);
  return {
    title: post.title + " | Mohammed Amr Blog",
    description: post.body.slice(0, 150),
    openGraph: {
      title: post.title + " | Mohammed Amr Blog",
      description: post.body.slice(0, 150),
      type: "article",
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const post: IPost = await getFetchPost(postId);
  return (
    <main className="container mx-auto">
      <NavBar />
      <article className="container ">
        <p className="mb-2 px-4 text-sm font-semibold text-[var(--purple-color)]">
          {post.author} {post.date}
        </p>
        <h1 className="mb-4 px-4 text-2xl font-semibold text-[var(--black-color)] dark:text-white">
          {post.title}
        </h1>
        <div className={`relative w-full h-[400px]`}>
          <Image
            src={post.image || ""}
            alt={post.title || "Post image"}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            aria-describedby="image-description"
          />
        </div>
        <p className="font-normal text-base py-4 px-3  dark:text-[var(--dark-description-color)] mt-4 ">
          {post.body.repeat(6)}
        </p>
      </article>
    </main>
  );
}
