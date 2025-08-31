import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getFavorites } from "../utils/favorites";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const refresh = () => setFavorites(getFavorites());

  useEffect(() => {
    refresh();
    const handleUpdate = () => refresh();
    window.addEventListener("favorites-updated", handleUpdate);
    return () => window.removeEventListener("favorites-updated", handleUpdate);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">My Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet. Add some from the search results.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favorites.map((m) => (
            <MovieCard key={m.imdbID} movie={m} />
          ))}
        </div>
      )}
    </div>
  );
}
