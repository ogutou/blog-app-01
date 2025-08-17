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
