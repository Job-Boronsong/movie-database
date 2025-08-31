import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite, isFavorite } from "../utils/favorites";

export default function MovieCard({ movie }) {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    setFav(isFavorite(movie.imdbID));
  }, [movie.imdbID]);

  const toggleFavorite = () => {
    if (fav) {
      removeFavorite(movie.imdbID);
      setFav(false);
    } else {
      addFavorite({
        imdbID: movie.imdbID,
        Title: movie.Title,
        Year: movie.Year,
        Poster: movie.Poster,
      });
      setFav(true);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
      <Link to={`/movie/${movie.imdbID}`}>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={movie.Title}
          className="w-full h-72 object-cover"
        />
      </Link>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{movie.Title}</h2>
        <p className="text-sm text-gray-500 mb-2">{movie.Year}</p>
        <button
          onClick={toggleFavorite}
          className={`px-3 py-1 rounded text-white ${
            fav ? "bg-red-500 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {fav ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}
