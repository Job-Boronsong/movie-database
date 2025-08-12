// src/services/movieService.js
import axios from "axios";
const API_KEY = import.meta.env.VITE_APP_MOVIE_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (q, page = 1) => {
  const { data } = await axios.get(BASE_URL, {
    params: { s: q, page, apikey: API_KEY }
  });
  return data; // OMDb returns Response: "True"/"False" and Search: [...]
};

export const getMovieDetails = async (imdbID) => {
  const { data } = await axios.get(BASE_URL, {
    params: { i: imdbID, plot: "full", apikey: API_KEY }
  });
  return data;
};
