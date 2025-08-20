"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { deleteBlog } from "@/blogAPI";
import { useRouter } from "next/navigation";

type DeleteButtonProps = {
  id: string;
};

function DeleteButton({ id }: DeleteButtonProps) {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteBlog(id);
    router.push("/");
    router.refresh();
  };

  return (
    <div>
      <Button
        variant="outline"
        className="bg-[#07B2D9] cursor-pointer"
        onClick={handleDelete}
      >
        削除
      </Button>
    </div>
  );
}

export default DeleteButton;
