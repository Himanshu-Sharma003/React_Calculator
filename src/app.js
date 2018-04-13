import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Container} from "./appStyle"
import DisplayPanel from "./components/displayPanel/displayPanel";
import ButtonGroup from "./components/buttonGroup/buttonGroup";
import calculate from "./utils/calculate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      lastNumber: "",
      operation: "",
      stack: []
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(value) {
    this.setState(calculate(this.state, value));
  }

  render() {
    return (
      <Container>
        <DisplayPanel
          stack={this.state.stack}
          result={this.state.lastNumber || this.state.total ||0}
        />
        <ButtonGroup onClick={this.onClick} />
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
