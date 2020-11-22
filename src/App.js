import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        Counter : {props.count}
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => props.increment()}
          >
            {" "}
            INCREMENT
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => props.count > 0 && props.decrement()}
          >
            DECREMENT
          </Button>
        </div>
      </header>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  count: state.counter,
});

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(App);
