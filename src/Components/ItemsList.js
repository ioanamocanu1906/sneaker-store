import React from "react";

class ItemsList extends React.Component {
  render() {
    return (
      <div className="store items-list">
        {Object.entries(this.props.storeItems).map(([id, value]) => (
          <div className="item-container" key={id}>
            <h3>{value.name}</h3>
            <img src={value.image} alt={value.name} />
            <h4>Price: {value.price}</h4>
            <div className="btn-container">
              <button
                className="btn addToCart"
                onClick={this.props.addToCart.bind(null, value)}
              >
                Add to Cart
              </button>
              <button className="btn addToFavorites">Add to Favorites</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ItemsList;
