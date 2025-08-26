// src/components/MovieCard.jsx
import { Link } from "react-router-dom";

export default function MovieCard({ movie, onFavorite, onRemove, isFavorite }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <Link to={`/movie/${movie.imdbID}`}>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={movie.Title}
          className="w-full h-72 object-cover"
        />
      </Link>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600">
          {movie.Title}
        </h2>
        <p className="text-sm text-gray-500 mb-2">{movie.Year}</p>

        {isFavorite ? (
          <button
            onClick={() => onRemove(movie.imdbID)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Remove from Favorites
          </button>
        ) : (
          <button
            onClick={() => onFavorite(movie)}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
          >
            Add to Favorites
          </button>
        )}
      </div>
    </div>
  );
}
