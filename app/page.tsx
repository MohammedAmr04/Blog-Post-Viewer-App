import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="bg-gray-800 m-5 text-amber-50 p-5 flex justify-center items-center text-3xl"
      style={{ height: "calc(100vh - 40px)" }}
      data-aos="fade-down"
    >
      <div className=" font-bold text-center flex flex-col items-center justify-center">
        <h1 className=" text-center text-4xl ">
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
