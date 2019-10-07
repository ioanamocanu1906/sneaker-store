import React from "react";
import "../App.css";
import { stores, items } from "../content";

class StorePicker extends React.Component {
  state = {
    items: {}
  };

  componentDidMount() {
    Object.keys(stores).map(key => {
      if (key === this.props.match.params.storeId)
        this.setState({
          items: stores[key].items.map(itemId => items[itemId])
        });
    });
  }
  render() {
    const items = this.state.items;
    return (
      <div className="App">
        {Object.keys(items).map(key => (
          <div>
            {" "}
            Name: {items[key].name}
            <img src={items[key].image} />
            Price: {items[key].price}
          </div>
        ))}
      </div>
    );
  }
}

export default StorePicker;
