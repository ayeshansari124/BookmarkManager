"use client";

import { useEffect, useState } from "react";
import BookmarkForm from "../components/BookmarkForm";
import BookmarkList from "../components/BookmarkList";
import { Bookmark } from "../types/bookmark";

export default function HomePage() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("bookmarks");
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (bookmark: Bookmark) => {
    setBookmarks([...bookmarks, bookmark]);
  };

  const removeBookmark = (index: number) => {
    const updated = bookmarks.filter((_, i) => i !== index);
    setBookmarks(updated);
  };

  return (
    <div className="flex flex-col items-center gap-5 text-center max-w-md mx-auto bg-neutral-300 mt-12 rounded-xl p-12 shadow-lg">
      <h1 className="text-3xl font-bold text-black">Bookmark Manager</h1>

      <BookmarkForm onAdd={addBookmark} />

      <h2 className="text-xl font-semibold text-black mt-6">Your Bookmarks:</h2>
      <BookmarkList bookmarks={bookmarks} onRemove={removeBookmark} />
    </div>
  );
}
