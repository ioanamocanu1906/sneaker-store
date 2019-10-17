function stores(state = {}, { type, index, storeId, quantity }) {
  const newState = { ...state };
  switch (type) {
    case "INCREMENT_QUANTITY":
      newState[storeId].items.forEach(element => {
        if (element.itemId === index) element.stock += quantity;
      });
      return newState;
    case "DECREMENT_QUANTITY":
      newState[storeId].items.forEach(element => {
        console.log(element);
        if (element.itemId === index) element.stock--;
      });
      return newState;
    default:
      return state;
  }
}
export default stores;
