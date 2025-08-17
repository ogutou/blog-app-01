"use client";

import React, { useState, DragEvent, ChangeEvent } from "react";
import { LuUpload } from "react-icons/lu";

export default function CreatePost() {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const dropped = Array.from(e.dataTransfer.files || []);
    if (!dropped.length) return;
    setFiles((prev) => [...prev, ...dropped].slice(0, 10));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);
    if (!selected.length) return;
    setFiles((prev) => [...prev, ...selected].slice(0, 10));
    e.currentTarget.value = ""; // 同じファイル再選択でも発火するように
  };

  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-xl md:w-1/2 px-4 py-10 flex flex-col gap-4">
        <p className="text-xl text-center p-3">ブログ新規作成</p>

        {/* Dropzone */}
        <div>
          <input
            id="file-input"
            type="file"
            multiple
            accept=".png,.jpg,.jpeg"
            onChange={handleChange}
            className="hidden"
          />
          <label
            htmlFor="file-input"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={[
              "flex flex-col items-center justify-center gap-2",
              "rounded-lg border-2 border-dashed p-8 transition",
              dragActive
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 hover:border-gray-400",
              "cursor-pointer",
            ].join(" ")}
          >
            <LuUpload className="h-6 w-6 text-gray-500" />
            <div className="text-sm">Drag and drop files here</div>
            <div className="text-xs text-gray-500">.png, .jpg up to 5MB</div>
          </label>

          {/* ファイル一覧 */}
          {files.length > 0 && (
            <ul className="mt-3 divide-y rounded-md border">
              {files.map((f, i) => (
                <li key={`${f.name}-${i}`} className="px-3 py-2 text-sm">
                  {f.name}{" "}
                  <span className="text-gray-500">
                    ({Math.ceil(f.size / 1024)} KB)
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Inputs */}
        <input
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="入力"
          type="text"
        />
        <input
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="入力"
          type="text"
        />
        <textarea
          className="w-full min-h-[120px] rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="入力"
        />
      </div>
    </div>
  );
}
