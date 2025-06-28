"use client";

import { Post } from "@/types/post";
import Image from "next/image";
import fallbackImage from "../assets/small.jpg";
import { FiArrowUpRight } from "react-icons/fi"; // Import the arrow icon
import "../app/globals.css";
import Link from "next/link";

type Variant = "large" | "full" | "small" | "normal";

interface VariantConfig {
  container: string;
  imageContainer: string;
  contentContainer: string;
  titleLength: number;
  bodyLength: number;
  imageSizes: string;
}

const variantConfig: Record<Variant, VariantConfig> = {
  small: {
    container: "flex flex-col sm:flex-row",
    imageContainer: "w-full sm:w-1/2 h-32 sm:h-48",
    contentContainer: "w-full sm:w-1/2 p-4",
    titleLength: 20,
    bodyLength: 70,
    imageSizes: "(max-width: 640px) 100vw, 50vw",
  },
  normal: {
    container: "flex flex-col",
    imageContainer: "w-full h-64",
    contentContainer: "p-6",
    titleLength: 20,
    bodyLength: 70,
    imageSizes: "100vw",
  },
  large: {
    container: "flex flex-col",
    imageContainer: "w-full h-56",
    contentContainer: "p-6",
    titleLength: 40,
    bodyLength: 120,
    imageSizes: "100vw",
  },
  full: {
    container: "flex flex-col lg:flex-row w-full",
    imageContainer: "w-full lg:w-1/2 ",
    contentContainer: "w-full lg:w-1/2 p-6",
    titleLength: 40,
    bodyLength: 120,
    imageSizes: "(max-width: 1024px) 100vw, 50vw",
  },
};

type PostCardProps = {
  postContent: Post;
  variant?: Variant;
};

const tagColors: string[] = [
  "text-[var(--purple-color)] bg-[#F9F5FF]",
  "text-[#3538CD] bg-[#EEF4FF]",
  "text-[#C11574] bg-[#FDF2FA]",
];

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export default function PostCard({
  postContent,
  variant = "normal",
}: PostCardProps) {
  const config = variantConfig[variant];

  return (
    <div
      className={`overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${config.container}`}
      data-aos="fade-up"
    >
      {/* Image Section */}
      <div className={`relative ${config.imageContainer}`}>
        <Image
          src={postContent.image || fallbackImage}
          alt={postContent.title || "Post image"}
          fill
          sizes={config.imageSizes}
          className="object-cover"
          priority={variant === "large" || variant === "full"}
        />
      </div>

      {/* Content Section */}
      <div className={`${config.contentContainer}`}>
        {/* Author + Date */}
        {(postContent.author || postContent.date) && (
          <p className="mb-2 text-sm font-semibold text-[var(--purple-color)]">
            {postContent.author} {postContent.date && ` • ${postContent.date}`}
          </p>
        )}

        {/* Title */}
        <div className="flex items-center justify-between">
          <h3 className="mb-2 text-2xl font-semibold text-[var(--black-color)] dark:text-[#fff]">
            {truncateText(postContent.title, config.titleLength)}
          </h3>
          <Link href={`posts/${postContent.id}`}>
            <FiArrowUpRight className="w-4 h-4 text-[var(--black-color)] dark:text-[#fff]" />{" "}
            {/* Replace Image with React Icon */}
          </Link>
        </div>

        {/* Description */}
        <p className="text-base text-[var(--gray-color)] dark:text-[#C0C5D0]">
          {truncateText(postContent.body, config.bodyLength)}
        </p>

        {/* Tags */}
        {postContent.tags && postContent.tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 mt-4 list-none">
            {postContent.tags.map((tag, index) => (
              <li
                key={tag}
                className={`${tagColors[index]} px-2 py-1 text-sm font-medium rounded-2xl`}
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
