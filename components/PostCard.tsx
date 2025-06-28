"use client";

import { Post } from "@/types/post";
import Image from "next/image";
import fallbackImage from "../assets/Image.jpg";
import "../app/globals.css";

// تعريف أنواع الـ Variants وخصائصها
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
      <div className={config.contentContainer}>
        {/* Author + Date */}
        {(postContent.author || postContent.date) && (
          <p className="mb-2 text-sm text-gray-400">
            {postContent.author} {postContent.date && ` • ${postContent.date}`}
          </p>
        )}

        {/* Title */}
        <h3 className="mb-2 text-xl font-bold transition-colors duration-300 hover:text-blue-400">
          {truncateText(postContent.title, config.titleLength)}
        </h3>

        {/* Description */}
        <p className="text-sm text-blue-200">
          {truncateText(postContent.body, config.bodyLength)}
        </p>

        {/* Tags */}
        {postContent.tags && postContent.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {postContent.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs text-blue-300 bg-gray-700 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
