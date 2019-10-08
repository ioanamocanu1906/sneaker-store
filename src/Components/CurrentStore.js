import React from "react";
import { connect } from "react-redux";

import "../App.css";
import ItemsList from "./ItemsList";
import Cart from "./Cart";
import Favorites from "./Favorites";

import { bindActionCreators } from "redux";
import * as actionCreators from "../Actions/actionCreators";

const mapStateToProps = ({ stores, items }) => ({
  stores,
  items
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

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
    this.props.decrementQuantity(item.id);
    this.setState({
      cartItems
    });
  };

  removeFromCart = itemId => {
    const cartItems = this.state.cartItems;
    delete cartItems[itemId].count;
    delete cartItems[itemId];
    this.props.incrementQuantity(itemId);

    this.setState({
      cartItems
    });
  };

  //favorite methods
  addToFavorites = item => {
    const favoriteItems = this.state.favoriteItems;
    favoriteItems[item.id] = item;
    this.props.incrementFavorites(item.id);

    this.setState({
      favoriteItems
    });
  };

  removeFromFavorites = itemId => {
    const favoriteItems = this.state.favoriteItems;
    delete favoriteItems[itemId];
    this.props.decrementFavorites(itemId);

    this.setState({
      favoriteItems
    });
  };

  render() {
    const { storeItems, cartItems, favoriteItems } = this.state;
    return (
      <React.Fragment>
        <ItemsList
          storeItems={storeItems}
          addToCart={this.addToCart}
          addToFavorites={this.addToFavorites}
        />
        <Favorites
          favoriteItems={favoriteItems}
          removeFromFavorites={this.removeFromFavorites}
        />
        <Cart cartItems={cartItems} removeFromCart={this.removeFromCart} />
      </React.Fragment>
    );
  }
}

const ConnectedCurrentStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentStore);

export default ConnectedCurrentStore;
