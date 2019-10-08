import React from "react";
import Item from "./Item";

class ItemsList extends React.Component {
  render() {
    return (
      <div className="store items-list">
        <h1>Products</h1>
        {Object.entries(this.props.storeItems).map(([id, value]) => (
          <Item
            key={id}
            value={value}
            addToCart={this.props.addToCart}
            addToFavorites={this.props.addToFavorites}
          />
        ))}
      </div>
    );
  }
}

export default ItemsList;
