// src/components/MovieCard.jsx
import React, { useState, useEffect } from "react";
import { addFavorite, removeFavorite, isFavorite } from "../utils/favorites";

export default function MovieCard({ movie }) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(movie.imdbID));
  }, [movie.imdbID]);

  const toggleFavorite = () => {
    if (favorite) {
      removeFavorite(movie.imdbID);
      setFavorite(false);
    } else {
      addFavorite(movie);
      setFavorite(true);
    }
  };

  return (
    <div className="border rounded-lg shadow p-4">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">{movie.Title}</h3>
      <p className="text-sm text-gray-500">{movie.Year}</p>
      <button
        onClick={toggleFavorite}
        className={`mt-2 px-4 py-2 rounded ${
          favorite ? "bg-red-500" : "bg-blue-500"
        } text-white`}
      >
        {favorite ? "Remove from Favorites ❤️" : "Add to Favorites 🤍"}
      </button>
    </div>
  );
}
