import React from "react";
import Item from "./Item";

class ItemsList extends React.Component {
  render() {
    const {
      storeItems,
      items,
      addToFavorites,
      removeFromFavorites,
      addToCart,
      storeId
    } = this.props;

    return (
      <React.Fragment>
        <h1>Products</h1>
        {storeItems.map(({ itemId }) => (
          <Item
            key={itemId}
            storeId={storeId}
            id={itemId}
            content={items[itemId]}
            addToCart={addToCart}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default ItemsList;
