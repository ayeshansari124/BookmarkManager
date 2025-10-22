"use client";

import { useState } from "react";
import { Bookmark } from "../types/bookmark";

interface Props {
  onAdd: (bookmark: Bookmark) => void;
}

export default function BookmarkForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    if (!name || !url) {
      alert("Please enter both name and valid URL");
      return;
    }
    onAdd({ name, url });
    setName("");
    setUrl("");
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Bookmark Name"
        className="w-full sm:w-4/5 p-2 rounded-lg border border-gray-300 text-black font-bold"
      />
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter Bookmark URL"
        className="w-full sm:w-4/5 p-2 rounded-lg border border-gray-300 text-black font-bold"
      />
      <button
        onClick={handleSubmit}
        className="w-full sm:w-[150px] px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-800 transition-all"
      >
        Add Bookmark
      </button>
    </div>
  );
}
