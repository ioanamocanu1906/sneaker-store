function rootReducer(state = {}, action) {
  const newState = state;
  switch (action.type) {
    case "INCREMENT_QUANTITY":
      newState.items[action.index].stock++;
      return newState;
    case "DECREMENT_QUANTITY":
      newState.items[action.index].stock--;
      return newState;
    case "INCREMENT_FAVORITES":
      newState.items[action.index].favoritedBy++;
      return newState;
    case "DECREMENT_FAVORITES":
      newState.items[action.index].favoritedBy--;
      return newState;
    default:
      return state;
  }
}

export default rootReducer;
