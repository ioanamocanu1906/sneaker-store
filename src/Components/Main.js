import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../Actions/actionCreators";
import App from "./App";

function mapStateToProps(state) {
  return {
    stores: state.stores,
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default Main;
