import React from "react";
import Item from "./Item";

class ItemsList extends React.Component {
  render() {
    return (
      <div className="store items-list">
        <h1>Products</h1>
        {Object.values(this.props.storeItems).map(itemId => (
          <Item
            value={itemId}
            addToCart={this.props.addToCart}
            addToFavorites={this.props.addToFavorites}
          />
        ))}
      </div>
    );
  }
}

export default ItemsList;
