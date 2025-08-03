import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-2 my-6">
      <input
        type="text"
        placeholder="Search for movies..."
        className="border rounded px-4 py-2 w-64"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
}
