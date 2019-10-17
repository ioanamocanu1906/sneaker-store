import React from "react";
import styles from "./favorites.module.css";

class FavoriteItem extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className={styles.favoriteItemContainer}>
        <span className="favorite-item name">{content.name}</span>
      </div>
    );
  }
}

export default FavoriteItem;
