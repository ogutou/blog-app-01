"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types";

type BlogsListProps = {
  blogs: Blog[];
};

const DiaryList = ({ blogs }: BlogsListProps) => {
  const [open, setOpen] = useState(false); // モバイル用サイドバー開閉

  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 grid gap-8 md:grid-cols-[1fr_18rem]">
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full rounded-md border px-4 py-3 text-left font-medium hover:bg-black/5"
          aria-expanded={open}
          aria-controls="mobile-aside"
        >
          リスト {open ? "▲" : "▼"}
        </button>
        {open && (
          <div id="mobile-aside" className="mt-3 rounded-md bg-[#88DFF2] p-4">
            リスト（モバイル）
          </div>
        )}
      </div>

      <main className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(18rem,1fr))]">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="overflow-hidden transition-shadow duration-300 bg-[#88DFF2] rounded-md shadow-md"
          >
            <Link href={`blogs/${blog.id}`}>
              <Image
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt="Green double couch with wooden legs"
                width={800}
                height={500}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-5 border-t">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <Link
                  href={`blogs/${blog.id}`}
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                >
                  {blog.createdAt}
                </Link>
                <span className="text-gray-600"> — 28 Dec 2020</span>
              </p>
              <Link
                href={`blogs/${blog.id}`}
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                {blog.title}
              </Link>
              <p className="mb-2 text-gray-700">{blog.content}</p>
              <Link
                href={`blogs/${blog.id}`}
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </Link>
            </div>
          </article>
        ))}
      </main>

      <aside className="hidden md:block md:sticky md:top-20 w-[18rem] max-h-[calc(100vh-5rem)] overflow-auto rounded-md bg-[#88DFF2] p-6">
        リスト
      </aside>
    </div>
  );
};

export default DiaryList;
