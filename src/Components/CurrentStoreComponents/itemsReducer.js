function items(state = {}, { type, index }) {
  const newState = { ...state };
  switch (type) {
    case "INCREMENT_FAVORITES":
      newState[index].favoritedBy++;
      return newState;
    case "DECREMENT_FAVORITES":
      newState[index].favoritedBy--;
      return newState;
    default:
      return state;
  }
}

export default items;
