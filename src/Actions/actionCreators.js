//decrement quantity

export function decrementQuantity(index) {
  return {
    type: "DECREMENT_QUANTITY",
    index
  };
}

//increment quantity

export function incrementQuantity(index) {
  return {
    type: "INCREMENT_QUANTITY",
    index
  };
}

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
