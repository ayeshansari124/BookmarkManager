"use client";

import { Bookmark } from "../types/bookmark";

interface Props {
  bookmarks: Bookmark[];
  onRemove: (index: number) => void;
}

export default function BookmarkList({ bookmarks, onRemove }: Props) {
  return (
    <ul id="bookmark-list" className="space-y-4 w-full mt-2">
      {bookmarks.map((bookmark, index) => (
        <li key={index} className="bg-white rounded-lg shadow p-4 w-full break-words">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            <a
              href={bookmark.url}
              target="_blank"
              className="text-black border border-transparent px-4 py-2 rounded-lg hover:border-black transition-all break-words"
            >
              {bookmark.name}
            </a>
            <button
              onClick={() => onRemove(index)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-all"
            >
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
