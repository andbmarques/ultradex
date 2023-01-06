export const updateFavoritesPokemons = (
  name,
  favorites,
  setFavorites,
  favoritesKey
) => {
  const updateFavorites = [...favorites];
  const favoriteIndex = favorites.indexOf(name);
  favoriteIndex >= 0
    ? updateFavorites.splice(favoriteIndex, 1)
    : updateFavorites.push(name);
  setFavorites(updateFavorites);
  window.localStorage.setItem(favoritesKey, JSON.stringify(updateFavorites));
};
