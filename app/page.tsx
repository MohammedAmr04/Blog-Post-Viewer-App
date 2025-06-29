import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="flex items-center justify-center p-5 m-5 text-3xl text-white bg-gray-800"
      style={{ height: "calc(100vh - 40px)" }}
      data-aos="fade-down"
    >
      <div className="flex flex-col items-center justify-center font-bold text-center ">
        <h1 className="text-4xl text-center ">
          Explore a world of stories and ideas posts!
        </h1>
        <Link href="/posts" className="block w-auto mt-6 ">
          <Button className="group">
            View Stroies
            <span className="inline-block ml-2 animate-arrow-on-hover">→</span>
          </Button>
        </Link>
      </div>
    </main>
  );
}
export const metadata = {
  title: "Home | Mohammed Amr Blog",
  description:
    "Welcome to Mohammed Amr's blog. Explore a world of stories and ideas!",
  openGraph: {
    title: "Home | Mohammed Amr Blog",
    description:
      "Welcome to Mohammed Amr's blog. Explore a world of stories and ideas!",
    type: "website",
  },
};
