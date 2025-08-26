// src/pages/Home.jsx
import React, { useState } from "react";
import { searchMovies } from "../services/movieService";
import MovieCard from "../components/MovieCard";
import Spinner from "../components/Spinner"; // ✅ Import Spinner

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (p = 1) => {
    setLoading(true);
    const data = await searchMovies(query, p);
    setMovies(data.Search || []);
    setTotalResults(Number(data.totalResults) || 0);
    setPage(p);
    setLoading(false);
  };

  return (
    <div className="p-4">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="border rounded p-2 w-full max-w-md"
      />
      <button
        onClick={() => handleSearch(1)}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      {loading ? (
        <Spinner /> // ✅ Show spinner
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {movies.map((m) => (
            <MovieCard key={m.imdbID} movie={m} />
          ))}
        </div>
      )}

      {totalResults > 10 && !loading && (
        <div className="flex justify-center gap-4 mt-6">
          <button
            disabled={page === 1}
            onClick={() => handleSearch(page - 1)}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <button
            disabled={page * 10 >= totalResults}
            onClick={() => handleSearch(page + 1)}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
