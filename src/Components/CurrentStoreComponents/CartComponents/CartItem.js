import React from "react";
import styles from "./cart.module.css";
import classnames from "classnames";
class CartItem extends React.Component {
  render() {
    const {
      id,
      content,
      removeFromCart,
      quantity,
      storeId,
      addToCart,
      decreaseFromCart
    } = this.props;
    return (
      <div className={styles.cartItemContainer}>
        <span className={classnames(styles.cartItem, "name")}>
          {content.name}
        </span>
        <span className={classnames(styles.cartItem, "price")}>
          Price: {content.price * quantity}
        </span>
        <div className={styles.quantityOpt}>
          <span className={classnames(styles.cartItem, "q")}>Q:{quantity}</span>
          <div className={styles.quantityBtnContainer}>
            <button
              className={classnames("btn", styles.quantityBtn)}
              onClick={decreaseFromCart.bind(null, id, storeId)}
            >
              <b>&#8722;</b>
            </button>
            <button
              className={classnames("btn", styles.quantityBtn)}
              onClick={addToCart.bind(null, id, storeId)}
            >
              <b>&#43;</b>
            </button>
          </div>
        </div>
        <button
          className={"btn " + styles.removeItem}
          onClick={removeFromCart.bind(null, id, storeId, quantity)}
        >
          &times;
        </button>
      </div>
    );
  }
}

export default CartItem;
