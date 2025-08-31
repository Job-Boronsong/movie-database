import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/movieService";
import { addFavorite, removeFavorite, isFavorite } from "../utils/favorites";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [fav, setFav] = useState(false);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const data = await getMovieDetails(id);
        if (data?.Response === "True") {
          setMovie(data);
          setFav(isFavorite(data.imdbID));
        } else {
          setErr("Movie not found.");
        }
      } catch {
        setErr("Error fetching movie details.");
      } finally {
        setLoading(false);
      }
    };
    loadMovie();
  }, [id]);

  const toggleFavorite = () => {
    if (!movie) return;
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

  if (loading) return <p className="text-center mt-6">Loading...</p>;
  if (err) return <p className="text-red-500 text-center mt-6">{err}</p>;

  return (
    <div className="max-w-5xl mx-auto p-4 md:flex md:gap-6">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
        alt={movie.Title}
        className="w-full md:w-1/3 h-auto rounded"
      />
      <div className="mt-4 md:mt-0">
        <h1 className="text-2xl font-bold">
          {movie.Title} <span className="text-gray-500">({movie.Year})</span>
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          {movie.Genre} • {movie.Runtime}
        </p>
        <p className="mt-4">{movie.Plot}</p>
        <p className="mt-4 text-sm"><strong>Cast:</strong> {movie.Actors}</p>
        <button
          onClick={toggleFavorite}
          className={`mt-4 px-4 py-2 rounded text-white ${
            fav ? "bg-red-500 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {fav ? "Remove from Favorites" : "Add to Favorites"}
        </button>
        <button
          onClick={() => navigate(-1)}
          className="ml-2 mt-4 bg-gray-800 text-white px-4 py-2 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
}
