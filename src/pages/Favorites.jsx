// src/pages/Favorites.jsx
import React, { useState, useEffect } from "react";
import { getFavorites, removeFavorite } from "../utils/favorites";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemove = (id) => {
    removeFavorite(id);
    setFavorites(getFavorites());
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorites yet. Start adding some!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {favorites.map((movie) => (
            <div key={movie.imdbID}>
              <MovieCard movie={movie} />
              <button
                onClick={() => handleRemove(movie.imdbID)}
                className="mt-2 w-full bg-red-600 text-white py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
