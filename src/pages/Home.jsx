// src/pages/Home.jsx
import React, { useState } from "react";
import { searchMovies } from "../services/movieService";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (p = 1) => {
    if (!query.trim()) return;
    setLoading(true);
    const data = await searchMovies(query, p);
    setMovies(data.Search || []);
    setTotalResults(Number(data.totalResults) || 0);
    setPage(p);
    setLoading(false);
  };

  const totalPages = Math.ceil(totalResults / 10);

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxPagesToShow = 5;
    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, start + maxPagesToShow - 1);

    if (end - start < maxPagesToShow - 1) {
      start = Math.max(1, end - maxPagesToShow + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handleSearch(i)}
          className={`px-3 py-1 rounded ${
            i === page
              ? "bg-blue-500 text-white font-bold"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex justify-center gap-2 mt-6 flex-wrap">
        <button
          disabled={page === 1}
          onClick={() => handleSearch(page - 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        {pages}

        <button
          disabled={page === totalPages}
          onClick={() => handleSearch(page + 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="p-4">
      {/* Search Bar */}
      <div className="flex justify-center gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="border rounded p-2 w-full max-w-md"
        />
        <button
          onClick={() => handleSearch(1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center mt-6">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {movies.map((m) => (
            <MovieCard key={m.imdbID} movie={m} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {renderPagination()}
    </div>
  );
}
