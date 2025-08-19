import Image from "next/image";
import DiaryList from "../components/diaryList";
import TopPage from "@/components/topPage";
import { getAllBlogs } from "@/blogAPI";

export default async function Home() {
  const blogs = await getAllBlogs();
  // console.log(blogs);

  return (
    <div>
      <div>
        <TopPage />
      </div>
      <h1 className="container px-6 pt-10 mx-auto">ブログ一覧</h1>
      <DiaryList blogs={blogs} />
    </div>
  );
}
