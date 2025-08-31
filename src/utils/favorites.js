const KEY = "favorites";

export const getFavorites = () => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const isFavorite = (id) =>
  getFavorites().some((m) => m.imdbID === id);

export const addFavorite = (movie) => {
  const list = getFavorites();
  if (!list.some((m) => m.imdbID === movie.imdbID)) {
    list.push(movie);
    localStorage.setItem(KEY, JSON.stringify(list));
    window.dispatchEvent(new Event("favorites-updated")); // notify
  }
};

export const removeFavorite = (id) => {
  const list = getFavorites().filter((m) => m.imdbID !== id);
  localStorage.setItem(KEY, JSON.stringify(list));
  window.dispatchEvent(new Event("favorites-updated")); // notify
};
