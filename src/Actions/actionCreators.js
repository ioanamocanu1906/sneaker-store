//enter store
export function enterStore(id) {
  return {
    type: "ENTER_STORE",
    id,
    active: false
  };
}
