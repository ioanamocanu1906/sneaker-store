import React from "react";
import { connect } from "react-redux";

import "../App.css";
import ItemsList from "./ItemsList";
import Cart from "./Cart";
import Favorites from "./Favorites";

const mapStateToProps = ({ stores, items }) => ({
  stores,
  items
});

class CurrentStore extends React.Component {
  state = {
    storeItems: {},
    cartItems: {},
    favoriteItems: {}
  };

  componentDidMount() {
    const { items, stores, match } = this.props;
    const storeId = match.params.storeId;
    this.setState({
      storeItems: stores[storeId].items.map(itemId => items[itemId])
    });
  }

  //cart methods
  addToCart = item => {
    const cartItems = this.state.cartItems;
    cartItems[item.id] = item;
    if (cartItems[item.id].count) cartItems[item.id].count++;
    else cartItems[item.id].count = 1;

    this.setState({
      cartItems
    });
  };

  render() {
    const { storeItems, cartItems, favoriteItems } = this.state;
    return (
      <React.Fragment>
        <ItemsList storeItems={storeItems} addToCart={this.addToCart} />
        <Favorites favoriteItems={favoriteItems} />
        <Cart cartItems={cartItems} />
      </React.Fragment>
    );
  }
}

const ConnectedCurrentStore = connect(mapStateToProps)(CurrentStore);

export default ConnectedCurrentStore;
