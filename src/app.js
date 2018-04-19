import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container } from "./appStyle";
import DisplayPanel from "./components/displayPanel/displayPanel";
import ButtonGroup from "./components/buttonGroup/buttonGroup";
import calculate from "./utils/calculate";
import keydown, { ALL_KEYS } from "react-keydown";

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
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  @keydown(ALL_KEYS)
  handleKeyPress(event) {
    var re = new RegExp("^[0-9\\+\\-\\*\\/\\=\\.]*$");
    if (re.test(event.key)) {
      this.setState(calculate(this.state, event.key));
    } else if (event.key === "Enter") {
      this.setState(calculate(this.state, "="));
    }
  }

  onClick(value) {
    this.setState(calculate(this.state, value));
  }

  render() {
    return (
      <Container>
        <DisplayPanel
          stack={this.state.stack}
          result={this.state.lastNumber || this.state.total || 0}
        />
        <ButtonGroup onClick={this.onClick} />
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
