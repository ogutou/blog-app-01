import Image from "next/image";
import DiaryList from "../components/diaryList";
import TopPage from "@/components/topPage";

export default function Home() {
  return (
    <div>
      <div>
        <TopPage />
      </div>
      <h1 className="px-4 pt-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        ブログ一覧
      </h1>
      <div>
        <DiaryList />
      </div>
    </div>
  );
}
