import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import styles from "./app.module.css";
import classnames from "classnames";

import FavoritesMenuStore from "./FavoritesMenuStore";
import * as actionCreators from "../../Store/actionCreators";

const mapStateToProps = ({ stores, items }) => ({
  stores,
  items
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

class App extends React.Component {
  state = {
    globalFavorites: {},
    showMenu: false
  };
  componentDidMount() {
    const globalFavorites = { ...this.state.globalFavorites };
    Object.keys(this.props.stores).forEach(storeId => {
      const storeInfo = sessionStorage.getItem(storeId);
      const storeState = JSON.parse(storeInfo);
      if (storeInfo && storeState.favoriteItems.length > 0) {
        globalFavorites[storeId] = [...storeState.favoriteItems];
      }
    });
    this.setState({
      globalFavorites
    });
  }

  storeHandler = e => {
    this.props.history.push(`${e.target.id}`);
  };

  render() {
    const { stores, items } = this.props;
    const { globalFavorites, showMenu } = this.state;
    return (
      <div className={styles.App}>
        {Object.keys(stores).map(key => (
          <img
            src={stores[key].image}
            className={classnames("btn", styles.storeLogo)}
            alt="logo"
            id={key}
            key={key}
            onClick={this.storeHandler}
          />
        ))}
        <div className={styles.globalFavorites}>
          <button
            className={classnames("btn", styles.globalFavoritesBtn)}
            onClick={() => this.setState({ showMenu: !showMenu })}
          >
            &#x2764;
          </button>
          {showMenu ? (
            <div className={styles.globalFavoritesMenu}>
              {Object.entries(globalFavorites).map(
                ([storeId, favoriteItems]) => (
                  <FavoritesMenuStore
                    key={storeId}
                    storeName={stores[storeId].name}
                    favoriteItems={favoriteItems}
                    items={items}
                  />
                )
              )}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
