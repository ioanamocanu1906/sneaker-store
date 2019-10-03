import React from "react";
import "../App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="/images/foot-locker-logo.jpg"
            className="store-logo"
            alt="logo"
            id="0"
            onClick={this.storeHandler}
          />
          <img
            src="/images/foot-shop-logo.png"
            className="store-logo"
            alt="logo"
            id="1"
            onClick={this.storeHandler}
          />
          <img
            src="/images/sneaker-industry-logo.png"
            className="store-logo"
            alt="logo"
            id="2"
            onClick={this.storeHandler}
          />
        </header>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default App;
