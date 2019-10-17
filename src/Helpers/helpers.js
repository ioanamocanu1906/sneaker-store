export function removeItemFromFavorites(itemId, favoriteItemsArr) {
  const index = favoriteItemsArr.findIndex(id => id === itemId);

  favoriteItemsArr.splice(index, 1);
  return favoriteItemsArr;
}
