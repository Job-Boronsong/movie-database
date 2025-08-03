import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from "./components/SearchBar";
import { searchMovies } from "./services/movieService";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    try {
      const data = await searchMovies(query);
      if (data.Response === "True") {
        setMovies(data.Search);
        setError("");
      } else {
        setMovies([]);
        setError("No movies found.");
      }
    } catch (err) {
      setError("Error fetching movies.");
    }
  };

  return (
    <div className="p-6">
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title} ({movie.Year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;