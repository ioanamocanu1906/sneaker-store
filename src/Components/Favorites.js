import React from "react";

class Favorites extends React.Component {
  render() {
    const favoriteItems = this.props.favoriteItems;
    return (
      <div className="store favorites">
        <h1>Favorites</h1>
        <div className="favorite-items">
          {Object.keys(favoriteItems).map(id => (
            <React.Fragment>
              <div className="favorite-item-container" key={id}>
                <span className="favorite-item name">
                  {favoriteItems[id].name}
                </span>
                <button
                  className="btn remove-item"
                  onClick={this.props.removeFromFavorites.bind(null, id)}
                >
                  &times;
                </button>
              </div>
              <hr />
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default Favorites;
