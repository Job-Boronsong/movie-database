// src/components/MovieCard.jsx
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`} className="block">
      <div className="bg-white rounded-md shadow hover:shadow-lg transition overflow-hidden">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={movie.Title}
          className="w-full h-56 object-cover"
        />
        <div className="p-3">
          <h3 className="font-semibold text-sm">{movie.Title}</h3>
          <p className="text-xs text-gray-500">{movie.Year}</p>
        </div>
      </div>
    </Link>
  );
}
