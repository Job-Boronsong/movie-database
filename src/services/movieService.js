import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_MOVIE_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query) => {
  const { data } = await axios.get(BASE_URL, {
    params: { s: query, apikey: API_KEY },
  });
  return data;
};
