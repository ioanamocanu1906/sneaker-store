import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { stores: state.stores };
};

class App extends React.Component {
  storeHandler = e => {
    this.props.history.push(`${e.target.id}`);
  };

  render() {
    return (
      <div className="App">
        {Object.keys(this.props.stores).map(key => (
          <img
            src={this.props.stores[key].image}
            className="store-logo"
            alt="logo"
            id={key}
            key={key}
            onClick={this.storeHandler}
          />
        ))}
      </div>
    );
  }
}

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
