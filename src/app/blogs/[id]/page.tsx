import React from "react";
import Image from "next/image";
import { getDetailBlog } from "@/blogAPI";
import { Blog } from "@/types";
import DeleteButton from "@/components/deleteButton";

type DetailBlogsProps = {
  params: Promise<{ id: string }>;
};

const DetailBlog = async ({ params }: DetailBlogsProps) => {
  const { id } = await params;
  const detailBlog: Blog = await getDetailBlog(id);

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="Green double couch with wooden legs"
        width={1280}
        height={300}
      />
      <h1 className="text-4xl text-center mb-10 mt-10">{detailBlog.title}</h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailBlog.content}</p>
      </div>
      <div>
        <DeleteButton id={detailBlog.id} />
      </div>
    </div>
  );
};

export default DetailBlog;
