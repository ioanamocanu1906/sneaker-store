import React from "react";

class Cart extends React.Component {
  render() {
    const cartItems = this.props.cartItems;
    return (
      <div className="store cart">
        <h1>Cart</h1>
        <div className="cart-items">
          {Object.keys(cartItems).map(id => (
            <React.Fragment>
              <div className="cart-item-container" key={id}>
                <h3>{cartItems[id].name}</h3>
                <h4>Price: {cartItems[id].price * cartItems[id].count}</h4>
                <h5>Count: {cartItems[id].count}</h5>
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
