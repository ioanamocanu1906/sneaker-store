import React from "react";
import "../App.css";
import { stores } from "../content";

class App extends React.Component {
  storeHandler = e => {
    this.props.history.push(`${e.target.id}`);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {Object.keys(stores).map(key => (
            <img
              src={stores[key].image}
              className="store-logo"
              alt="logo"
              id={key}
              key={key}
              onClick={this.storeHandler}
            />
          ))}
        </header>
      </div>
    );
  }
}

export default App;
