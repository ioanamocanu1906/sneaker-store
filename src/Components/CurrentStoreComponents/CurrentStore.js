import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { bindActionCreators } from "redux";

import ItemsList from "./ItemsComponents/ItemsList";
import Cart from "./CartComponents/Cart";
import Favorites from "./FavoritesComponents/Favorites";
import * as actionCreators from "../../Store/actionCreators";
import { removeItemFromFavorites } from "../../Helpers/helpers";

import styles from "./currentStore.module.css";

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

    const storeInfo = sessionStorage.getItem(storeId);

    if (storeInfo) {
      this.setState({ ...JSON.parse(storeInfo) });
    }
    this.setState({
      storeItems: stores[storeId].items
    });
  }

  componentDidUpdate() {
    const { storeId } = this.props.match.params;
    const { cartItems, favoriteItems } = this.state;
    const storageState = {
      cartItems,
      favoriteItems
    };
    const stringState = JSON.stringify(storageState);

    sessionStorage.setItem(storeId, stringState);
  }

  //cart methods
  addToCart = (itemId, storeId) => {
    const cartItems = [...this.state.cartItems];

    const index = cartItems.findIndex(({ itemId: id }) => id === itemId);
    console.log(index);

    if (index < 0) {
      cartItems.push({ itemId, count: 1 });
    } else {
      cartItems[index].count++;
    }
    //decrement Quantity from store
    this.props.decrementStock(itemId, storeId);

    this.setState({
      cartItems
    });
  };

  removeFromCart = (itemId, storeId, quantity) => {
    const cartItems = this.state.cartItems;
    const index = cartItems.findIndex(({ itemId: id }) => id === itemId);

    cartItems.splice(index, 1);
    this.props.incrementStock(itemId, storeId, quantity);

    this.setState({
      cartItems
    });
  };

  //favorite methods
  addToFavorites = itemId => {
    const favoriteItems = [...this.state.favoriteItems];
    const index = favoriteItems.findIndex(id => id === itemId);

    if (index < 0) {
      favoriteItems.push(itemId);
      this.props.incrementFavorites(itemId);
    }

    this.setState({
      favoriteItems
    });
  };

  removeFromFavorites = itemId => {
    this.props.decrementFavorites(itemId);

    this.setState({
      favoriteItems: removeItemFromFavorites(itemId, this.state.favoriteItems)
    });
  };

  decreaseFromCart = (itemId, storeId) => {
    const cartItems = this.state.cartItems;

    cartItems.forEach(item => {
      const hasElement = item.itemId === itemId;
      const moreThanOne = item.count > 1;

      switch (true) {
        case hasElement && moreThanOne:
          item.count--;
          this.props.incrementStock(itemId, storeId, 1);
          break;
        case hasElement:
          this.removeFromCart(itemId, storeId, 1);
          break;
        default:
          break;
      }
    });

    this.setState({
      cartItems
    });
  };

  render() {
    const { storeItems, cartItems, favoriteItems } = this.state;
    const { items, match } = this.props;
    return (
      <React.Fragment>
        <div className={classnames(styles.store, styles.scrollBarRed)}>
          <ItemsList
            storeId={match.params.storeId}
            storeItems={storeItems}
            items={this.props.items}
            addToCart={this.addToCart}
            addToFavorites={this.addToFavorites}
            removeFromFavorites={this.removeFromFavorites}
            className={styles.store}
          />
        </div>
        <div className={classnames(styles.store, styles.scrollBarRed)}>
          <Favorites favoriteItems={favoriteItems} items={items} />
        </div>
        <div className={classnames(styles.store, styles.scrollBarRed)}>
          <Cart
            storeId={match.params.storeId}
            cartItems={cartItems}
            items={items}
            removeFromCart={this.removeFromCart}
            decreaseFromCart={this.decreaseFromCart}
            addToCart={this.addToCart}
          />
        </div>
      </React.Fragment>
    );
  }
}

const ConnectedCurrentStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentStore);

export default ConnectedCurrentStore;
