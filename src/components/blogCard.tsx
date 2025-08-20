import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types";

type BlogCardProps = {
  blog: Blog;
};

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div
      className="xl:flex w-full max-w-md xl:max-w-none xl:gap-6"
      key={blog.id}
    >
      <Link href={`blogs/${blog.id}`}>
        <Image
          className="object-cover w-full h-56 rounded-lg xl:w-64 xl:h-64 xl:shrink-0"
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt=""
          width={800}
          height={500}
        />
      </Link>
      <div className="flex flex-col justify-between py-6 xl:mx-6 flex-1 min-w-0">
        <Link
          href={`blogs/${blog.id}`}
          className="block text-xl font-semibold text-gray-800 hover:underline dark:text-white whitespace-normal break-words"
        >
          {blog.title.length > 20
            ? blog.title.substring(0, 20) + "..."
            : blog.title}
        </Link>
        <span className="text-sm text-gray-500 dark:text-gray-300">
          {blog.createdAt}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
