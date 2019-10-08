import React from "react";

class Cart extends React.Component {
  render() {
    const cartItems = this.props.cartItems;
    return (
      <div className="store cart">
        <h1>Cart</h1>
        <div className="cart-items">
          {Object.keys(cartItems).map(id => (
            <React.Fragment key={id}>
              <div className="cart-item-container" key={id}>
                <span className="cart-item name">{cartItems[id].name}</span>
                <span className="cart-item price">
                  Price: {cartItems[id].price * cartItems[id].count}
                </span>
                <span className="cart-item q">Q: {cartItems[id].count}</span>
                <button
                  className="btn remove-item"
                  onClick={this.props.removeFromCart.bind(null, id)}
                >
                  &times;
                </button>
              </div>
              <hr />
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default Cart;
