import React from "react";
import classnames from "classnames";
import { Collapse } from "react-collapse";

import styles from "./app.module.css";

class FavoritesMenuStore extends React.Component {
  state = {
    showing: false
  };
  render() {
    const { showing } = this.state;
    const { storeName, favoriteItems, items } = this.props;
    return (
      <React.Fragment>
        <button
          className={classnames("btn", styles.storeFavoritesBtn)}
          onClick={() => this.setState({ showing: !showing })}
        >
          <span>{storeName}</span>
          {showing ? <span>&#11167;</span> : <span>&#10148;</span>}
        </button>
        <Collapse isOpened={showing}>
          {favoriteItems.map(id => (
            <div key={id} className={styles.itemWrapper}>
              <div className={styles.favoriteItem}>{items[id].name}</div>
              <button className={classnames("btn", styles.removeFavBtn)}>
                &times;
              </button>
            </div>
          ))}
        </Collapse>
      </React.Fragment>
    );
  }
}

export default FavoritesMenuStore;
