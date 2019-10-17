import React from "react";
import FavoriteItem from "./FavoriteItem";
import styles from "./favorites.module.css";

class Favorites extends React.Component {
  render() {
    const { items, favoriteItems, removeFromFavorites } = this.props;
    return (
      <React.Fragment>
        <h1>Favorites</h1>
        <div className="favorite-items">
          {favoriteItems.map(id => (
            <FavoriteItem
              key={id}
              id={id}
              content={items[id]}
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Favorites;
