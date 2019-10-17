import React from "react";
import CartItem from "./CartItem";
import styles from "./cart.module.css";

class Cart extends React.Component {
  render() {
    const {
      items,
      cartItems,
      removeFromCart,
      storeId,
      addToCart,
      decreaseFromCart
    } = this.props;
    return (
      <React.Fragment>
        <h1>Cart</h1>
        <div className={styles.cartItems}>
          {cartItems.map(({ count, itemId }) => (
            <CartItem
              key={itemId}
              id={itemId}
              storeId={storeId}
              quantity={count}
              content={items[itemId]}
              removeFromCart={removeFromCart}
              addToCart={addToCart}
              decreaseFromCart={decreaseFromCart}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
