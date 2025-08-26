// src/pages/Favorites.jsx
import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter((m) => m.imdbID !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">My Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favorites.map((m) => (
            <MovieCard
              key={m.imdbID}
              movie={m}
              isFavorite
              onRemove={removeFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}
