import React from "react";

class Item extends React.Component {
  render() {
    const value = this.props.value;
    return (
      <div className="item-container">
        <h3>{value.name}</h3>
        <h5>Favorited by {value.favoritedBy} people</h5>
        <img src={value.image} alt={value.name} />
        <h4>Price: {value.price}</h4>
        <div className="btn-container">
          <button
            className="btn addToCart"
            onClick={this.props.addToCart.bind(null, value)}
          >
            Add to Cart
          </button>
          <button
            className="btn addToFavorites"
            onClick={this.props.addToFavorites.bind(null, value)}
          >
            &#x2661;
          </button>
        </div>
      </div>
    );
  }
}

export default Item;
