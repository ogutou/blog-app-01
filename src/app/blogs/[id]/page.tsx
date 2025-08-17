import React from "react";
import Image from "next/image";

const Blog = ({ params }: { params: { id: string } }) => {
  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="Green double couch with wooden legs"
        width={1280}
        height={300}
      />
      <h1 className="text-4xl text-center mb-10 mt-10">タイトル</h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>本文</p>
      </div>
    </div>
  );
};

export default Blog;
