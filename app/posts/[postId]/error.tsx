"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorProps = {
  error: Error;
};

export default function Error({ error }: ErrorProps) {
  useEffect(() => {
    console.error("Error occurred:", error);
  }, [error]);

  return (
    <main className="container mx-auto">
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-4xl font-bold text-red-500">
          Something went wrong!
        </h2>
        <p className="mt-4 text-3xl text-gray-600 dark:text-gray-300">
          {error.message ||
            "There was an issue loading the page. Please try again later."}
        </p>
        <div className="flex gap-4 mt-6">
          <Link
            href="/"
            className="px-4 py-2 text-gray-800 transition bg-gray-200 rounded hover:bg-gray-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
