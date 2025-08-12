// src/pages/MovieDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/movieService"; // ✅ Ensure this function is implemented

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const data = await getMovieDetails(id);

        if (data?.Response === "True") {
          setMovie(data);
        } else {
          setErr("Movie not found.");
        }
      } catch (error) {
        console.error("Error fetching movie:", error);
        setErr("Error fetching movie details.");
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-6">Loading...</p>;
  }

  if (err) {
    return <p className="text-red-500 text-center mt-6">{err}</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:flex md:gap-6">
      <img
        src={movie?.Poster && movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
        alt={movie?.Title || "Movie Poster"}
        className="w-full md:w-1/3 h-auto rounded"
      />

      <div className="mt-4 md:mt-0">
        <h1 className="text-2xl font-bold">
          {movie?.Title}{" "}
          <span className="text-gray-500">({movie?.Year})</span>
        </h1>

        <p className="text-sm text-gray-600 mt-2">
          {movie?.Genre} • {movie?.Runtime}
        </p>

        <p className="mt-4">{movie?.Plot}</p>

        <p className="mt-4 text-sm">
          <strong>Cast:</strong> {movie?.Actors}
        </p>

        {movie?.Ratings?.length > 0 && (
          <p className="mt-2 text-sm">
            <strong>Ratings:</strong>{" "}
            {movie.Ratings.map((r, index) => (
              <span key={index}>
                {r.Source}: {r.Value}
                {index < movie.Ratings.length - 1 && " | "}
              </span>
            ))}
          </p>
        )}

        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
}
