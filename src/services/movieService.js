// src/services/movieService.js
import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_MOVIE_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query, page = 1) => {
  const { data } = await axios.get(BASE_URL, {
    params: { s: query, page, apikey: API_KEY }
  });
  return data;
};

export const getMovieDetails = async (id) => {
  const { data } = await axios.get(BASE_URL, {
    params: { i: id, plot: "full", apikey: API_KEY }
  });
  return data;
};
