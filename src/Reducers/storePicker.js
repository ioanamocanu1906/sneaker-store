export default function changeStore(state = {}, action) {
  //   switch (action.type) {
  //     case "ENTER_STORE":
  //       return state.map(store =>
  //         store.id === action.id ? { ...store, active: !store.active } : store
  //       );
  //     default:
  //       return state;
  //   }
  console.log(action, state);
  return state;
}
