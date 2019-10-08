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
    storeItems: [],
    cartItems: [],
    favoriteItems: []
  };

  componentDidMount() {
    const { stores, match } = this.props;
    const storeId = match.params.storeId;
    //save the ids of the items, not the actual items
    this.setState({
      storeItems: stores[storeId].items
    });
  }

  //cart methods
  addToCart = itemId => {
    const cartItems = [...this.state.cartItems];
    var itemExists = false;
    //check for itemId inside the array of objects
    cartItems.forEach(item => {
      if (item.itemId === itemId) {
        //increase count if it exists already
        item.count++;
        itemExists = true;
      }
    });
    //if it was not added to cart yet, or there are no products, add itemId
    if (cartItems.length < 1 || !itemExists)
      cartItems.push({ itemId, count: 1 });

    //decrement Quantity from store
    this.props.decrementQuantity(itemId);

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
  addToFavorites = itemId => {
    // const favoriteItems = this.state.favoriteItems;
    // favoriteItems[item.id] = item;
    // this.props.incrementFavorites(item.id);
    // this.setState({
    //   favoriteItems
    // });
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
          items={this.props.items}
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
