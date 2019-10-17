//decrement favorites

export function decrementFavorites(index) {
  return {
    type: "DECREMENT_FAVORITES",
    index
  };
}

//increment favorites

export function incrementFavorites(index) {
  return {
    type: "INCREMENT_FAVORITES",
    index
  };
}

//decrement stock

export function decrementStock(index, storeId) {
  return {
    type: "DECREMENT_STOCK",
    index,
    storeId
  };
}

//increment stock

export function incrementStock(index, storeId, stock) {
  return {
    type: "INCREMENT_STOCK",
    index,
    storeId,
    stock
  };
}
