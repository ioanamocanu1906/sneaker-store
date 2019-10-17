import React from "react";
import styles from "./items.module.css";
import classnames from "classnames";

class Item extends React.Component {
  state = {
    liked: false
  };

  componentDidMount = () => {
    const { storeId, id } = this.props;
    const itemInfo = sessionStorage.getItem(storeId + id);
    if (itemInfo) {
      this.setState({ ...JSON.parse(itemInfo) });
    }
  };

  componentDidUpdate = () => {
    const { storeId, id } = this.props;
    sessionStorage.setItem(storeId + id, JSON.stringify(this.state));
  };

  onClickHandler = ({ addToFavorites, removeFromFavorites, id }) => {
    const liked = !this.state.liked;
    if (liked) {
      addToFavorites(id);
    } else {
      removeFromFavorites(id);
    }
    this.setState({ liked });
  };

  render() {
    const {
      id,
      content,
      addToCart,
      addToFavorites,
      storeId,
      removeFromFavorites
    } = this.props;
    return (
      <div className={styles.itemContainer}>
        <h3>{content.name}</h3>
        <h5>Favorited by {content.favoritedBy} people</h5>
        <img src={content.image} alt={content.name} />
        <h4>Price: {content.price}</h4>
        <div className={styles.btnContainer}>
          <button
            className={classnames("btn ", styles.addToCart)}
            onClick={addToCart.bind(null, id, storeId)}
          >
            Add to Cart
          </button>
          <button
            className={classnames("btn", {
              [styles.addToFavoritesT]: this.state.liked,
              [styles.addToFavoritesF]: !this.state.liked
            })}
            onClick={() =>
              this.onClickHandler({
                addToFavorites,
                removeFromFavorites,
                id
              })
            }
          >
            &#x2764;
          </button>
        </div>
      </div>
    );
  }
}

export default Item;
