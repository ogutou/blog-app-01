import { notFound } from "next/navigation";
import { Blog } from "./types";

export const getAllBlogs = async (): Promise<Blog[]> => {
  const res = await fetch("http://localhost:3001/blogs", { cache: "no-store" });
  const results = await res.json();

  if (!res.ok) {
    throw new Error("errorが発生しました");
  }

  // await new Promise((resolve) => setTimeout(resolve, 1500));

  return results;

  // console.log(result);
};

export const getDetailBlog = async (id: string): Promise<Blog> => {
  const res = await fetch(`http://localhost:3001/blogs/${id}`, {
    next: { revalidate: 60 },
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("errorが発生しました");
  }

  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const result = await res.json();

  return result;

  // console.log(result);
};
