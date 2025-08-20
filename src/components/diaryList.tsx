"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types";
import BlogCard from "./blogCard";

type BlogsListProps = {
  blogs: Blog[];
};

const DiaryList = ({ blogs }: BlogsListProps) => {
  const [open, setOpen] = useState(false); // モバイル用サイドバー開閉

  return (
    <div className="">
      <div className="lg:hidden">
        <div>
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
      </div>
      <div className="flex gap-8 container px-6 py-10 mx-auto">
        <section className="dark:bg-gray-900 flex-1">
          <div>
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 justify-items-center xl:justify-items-start">
              {blogs.map((blog) => (
                <BlogCard blog={blog} key={blog.id} />
              ))}
            </div>
          </div>
        </section>
        <aside className="hidden lg:block md:top-20 w-[18rem] max-h-[calc(100vh-5rem)] overflow-auto rounded-md bg-[#88DFF2] p-6">
          リスト
        </aside>
      </div>
    </div>
  );
};

export default DiaryList;
