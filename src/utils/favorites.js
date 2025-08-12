// src/utils/favorites.js
export const getFavorites = () => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  };
  
  export const addFavorite = (movie) => {
    const favorites = getFavorites();
    const exists = favorites.some(fav => fav.imdbID === movie.imdbID);
    if (!exists) {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };
  
  export const removeFavorite = (id) => {
    const favorites = getFavorites().filter(movie => movie.imdbID !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
  
  export const isFavorite = (id) => {
    const favorites = getFavorites();
    return favorites.some(movie => movie.imdbID === id);
  };
  